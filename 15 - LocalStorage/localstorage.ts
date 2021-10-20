type MenuItem = {
    name:    string;
    checked: boolean;
};

const itemsList   = document.querySelector('.plates') as HTMLUListElement;
const addItemForm = document.querySelector('.add-item') as HTMLFormElement;

const items: MenuItem[] = loadFromLocalStorage();
rebuildItemList(items, itemsList);
rebuildItemListEvents(itemsList);

addItemForm?.addEventListener('submit', e => addItem(e));
addItemForm?.querySelector('[name=clear]')?.addEventListener('click', () => clearAll());
addItemForm?.querySelector('[name=checkAll]')?.addEventListener('click', () => changeStateForAll(true));
addItemForm?.querySelector('[name=uncheckAll]')?.addEventListener('click', () => changeStateForAll(false));

// fügt das in der add-item Form eingegebene Element in das Menü (items-Liste) ein falls
// noch nicht vorhanden
function addItem(e: Event) {
    e.preventDefault(); // kein postback der Input-Form

    const inputText = (addItemForm?.querySelector('[name=item]') as HTMLInputElement).value;
    if(!items.some(i => i.name == inputText)) {
        console.log(`adding new item ${inputText}`);

        const newItem : MenuItem = { 
            name:    inputText,
            checked: false
        };
        items.push(newItem);

        saveToLocalStorage(items);

        rebuildItemList(items, itemsList);
        rebuildItemListEvents(itemsList);

        addItemForm.reset();
    }
    else {
        console.log(`item ${inputText} already in list`);
    }
}

// Liste leeren und speichern
function clearAll() {
    items.length = 0;
    saveToLocalStorage(items);

    rebuildItemList(items, itemsList);
    rebuildItemListEvents(itemsList);
}

// alle Haken in der Liste (de)aktivieren und speichern
function changeStateForAll(state: boolean) {
    items.forEach(i => i.checked = state);
    saveToLocalStorage(items);

    rebuildItemList(items, itemsList);
    rebuildItemListEvents(itemsList);
}

// Datenmodell für itemliste im LocalStorage speichern
function saveToLocalStorage(items: MenuItem[]) {
    localStorage.setItem('menuItems', JSON.stringify(items));
    console.log(`saved menu items to LocalStorage`);
}

// Datenmodell für itemliste im LocalStorage speichern
function loadFromLocalStorage(): MenuItem[]{
    console.log(`loading menu items from LocalStorage`);

    const itemsJson = localStorage.getItem('menuItems');
    if(itemsJson) {
        const menuItems: MenuItem[] = JSON.parse(itemsJson);
        return menuItems;
    }
    else {
        return [];
    }
}


// erzeugt den HTML-Code für die Itemliste komplett neu anhand der Inhalte in $items
function rebuildItemList(items: MenuItem[], htmlList: HTMLUListElement) {
    const listHtml = items.map((item, i) => `<li>
                                                 <input type='checkbox'
                                                        data-index=${i}
                                                        id='item${i}'
                                                        ${item.checked ? 'checked' : ''}>
                                                 </input>
                                                 <label for='item${i}'>${item.name}</label>
                                             </li>`)
                          .join(' ');

    htmlList.innerHTML = listHtml;
}

// erzeugt für jedes aktuelle Listenelement einen Eventhandler, der die checked-Flags im
// jeweiligen MenuItem-Objekt auf den Wert der angeklickten Checkbox setzt und speichert dann
// alles ab
function rebuildItemListEvents(itemsList: HTMLUListElement) {
    const liElems = Array.from(itemsList.querySelectorAll('li')) as HTMLLIElement[];
    liElems.forEach((li) => li.addEventListener('click', e => {
        const i        = Number((e.target as HTMLElement).dataset.index);
        const checkbox = li.querySelector('[type=checkbox]') as HTMLInputElement;

        if(checkbox && i >= 0) {
            items[i].checked = checkbox.checked;
            saveToLocalStorage(items);
        }
    }));
}
