import {createChart} from "./js/CreateChart";
import {clearItem} from "./js/clearItem";
import {newItem} from "./js/newItem";
import {actutItems} from "./js/actutItems";

import "./css/front.css";

if (localStorage.getItem("delete") === null || localStorage.getItem("delete") === undefined || localStorage.getItem("delete") === "NaN") {
    localStorage.setItem("delete", "0");
}

// Button
let addingItem = document.querySelector('#addItem button');
let clear = document.querySelector('#clearItem button');

// Clear list item & localstorage
let newClear = new clearItem();
clear.addEventListener('click', newClear.clear);

// Search and add local storage value
new createChart().create();
new actutItems().actut();

// Add a new value
let newI = new newItem();
addingItem.addEventListener('click', newI.add);