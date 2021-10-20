"use strict";
var _a, _b, _c;
const itemsList = document.querySelector('.plates');
const addItemForm = document.querySelector('.add-item');
const items = loadFromLocalStorage();
rebuildItemList(items, itemsList);
rebuildItemListEvents(itemsList);
addItemForm === null || addItemForm === void 0 ? void 0 : addItemForm.addEventListener('submit', e => addItem(e));
(_a = addItemForm === null || addItemForm === void 0 ? void 0 : addItemForm.querySelector('[name=clear]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => clearAll());
(_b = addItemForm === null || addItemForm === void 0 ? void 0 : addItemForm.querySelector('[name=checkAll]')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => changeStateForAll(true));
(_c = addItemForm === null || addItemForm === void 0 ? void 0 : addItemForm.querySelector('[name=uncheckAll]')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => changeStateForAll(false));
// fügt das in der add-item Form eingegebene Element in das Menü (items-Liste) ein falls
// noch nicht vorhanden
function addItem(e) {
    e.preventDefault(); // kein postback der Input-Form
    const inputText = (addItemForm === null || addItemForm === void 0 ? void 0 : addItemForm.querySelector('[name=item]')).value;
    if (!items.some(i => i.name == inputText)) {
        console.log(`adding new item ${inputText}`);
        const newItem = {
            name: inputText,
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
function changeStateForAll(state) {
    items.forEach(i => i.checked = state);
    saveToLocalStorage(items);
    rebuildItemList(items, itemsList);
    rebuildItemListEvents(itemsList);
}
// Datenmodell für itemliste im LocalStorage speichern
function saveToLocalStorage(items) {
    localStorage.setItem('menuItems', JSON.stringify(items));
    console.log(`saved menu items to LocalStorage`);
}
// Datenmodell für itemliste im LocalStorage speichern
function loadFromLocalStorage() {
    console.log(`loading menu items from LocalStorage`);
    const itemsJson = localStorage.getItem('menuItems');
    if (itemsJson) {
        const menuItems = JSON.parse(itemsJson);
        return menuItems;
    }
    else {
        return [];
    }
}
// erzeugt den HTML-Code für die Itemliste komplett neu anhand der Inhalte in $items
function rebuildItemList(items, htmlList) {
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
function rebuildItemListEvents(itemsList) {
    const liElems = Array.from(itemsList.querySelectorAll('li'));
    liElems.forEach((li) => li.addEventListener('click', e => {
        const i = Number(e.target.dataset.index);
        const checkbox = li.querySelector('[type=checkbox]');
        if (checkbox && i >= 0) {
            items[i].checked = checkbox.checked;
            saveToLocalStorage(items);
        }
    }));
}
