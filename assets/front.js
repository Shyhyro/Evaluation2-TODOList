
//import {SayObject} from "./js/SayObject";
//SayObject.addItem();
//SayObject.sayGoodbye();

import "./css/front.css";

let addingItem = document.querySelector('#addItem button');
let table = document.getElementById('itemsList');
let clear = document.querySelector('#clearItem button');


// Clear list item & localstorage
function clearItem() {
    localStorage.clear();
    table.innerHTML="";
}

clear.addEventListener('click', clearItem);

// Search and add local storage value
function localActut(){
    table.innerHTML="";

    for(let i=0, len=localStorage.length; i<len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.innerHTML = "<td>"+ value +"</td>" +
            "<td class='action'>" +
            "<i class=\"far fa-check-circle\" data-id='" + key + "'></i>" +
            "<i class=\"fas fa-edit\" data-id='" + key + "'></i>" +
            "<i class=\"far fa-times-circle\" data-id='" + key + "'></i>" +
            "</td>";
    }

    checkItem();
    deleteItem();
}

// Add a new value
addingItem.addEventListener('click', function () {
    let newItem = document.getElementById('newItem');

    if (newItem.value.length > 0) {
        let number = localStorage.length;
        let id = "Item" + number;
        console.log("Add: "+ id);
        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.innerHTML = "<td>"+ newItem.value +"</td>" +
            "<td class='action'>" +
            "<i class=\"far fa-check-circle\" data-id='" + id + "'></i>" +
            "<i class=\"fas fa-edit\" data-id='" + id + "'></i>" +
            "<i class=\"far fa-times-circle\" data-id='" + id + "'></i>" +
            "</td>";
        localStorage.setItem(id, newItem.value);

        setTimeout(localActut, 800);
    }
});

// Check a item
function checkItem() {
    let check = document.querySelectorAll(".fa-check-circle");

    check.forEach(function (e) {
        e.addEventListener('click', function () {
            let id = e.dataset.id;
            e.style.color = "#95D6B7";
            console.log("Check: " + id);
        })
    })
}

// Delete a item
function deleteItem() {
    let check = document.querySelectorAll(".fa-times-circle");

    check.forEach(function (e) {
        e.addEventListener('click', function () {
            let id = e.dataset.id;
            console.log("Delete: " + id);
            localStorage.removeItem(id);

            setTimeout(localActut, 800);
        })
    })
}

// Call
localActut();