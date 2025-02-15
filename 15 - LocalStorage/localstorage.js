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
function addItem(e) {
    e.preventDefault();
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
function clearAll() {
    items.length = 0;
    saveToLocalStorage(items);
    rebuildItemList(items, itemsList);
    rebuildItemListEvents(itemsList);
}
function changeStateForAll(state) {
    items.forEach(i => i.checked = state);
    saveToLocalStorage(items);
    rebuildItemList(items, itemsList);
    rebuildItemListEvents(itemsList);
}
function saveToLocalStorage(items) {
    localStorage.setItem('menuItems', JSON.stringify(items));
    console.log(`saved menu items to LocalStorage`);
}
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
//# sourceMappingURL=localstorage.js.map