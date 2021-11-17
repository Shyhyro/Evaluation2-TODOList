
import {SayObject} from "./js/SayObject";
import "./css/front.css";

let addingItem = document.querySelector('#addItem button');

let table = document.getElementById('itemsList');

if (localStorage.getItem('Item') !== null) {
    let items = localStorage.getItem('Item');

    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.innerHTML = "<td>"+ items +"</td>" +
        "<td class='action'><i class=\"far fa-check-circle\"></i><i class=\"fas fa-edit\"></i><i class=\"far fa-times-circle\"></i></td>";
}

addingItem.addEventListener('click', function () {

    let newItem = document.getElementById('newItem');

    console.log(newItem.value);

    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.innerHTML = "<td>"+ newItem.value +"</td>" +
        "<td class='action'><i class=\"far fa-check-circle\"></i><i class=\"fas fa-edit\"></i><i class=\"far fa-times-circle\"></i></td>";

    localStorage.setItem('Item', newItem.value);

});

//SayObject.addItem();
//SayObject.sayGoodbye();