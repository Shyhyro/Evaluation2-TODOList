import {checkItem} from "./checkItem.mjs";
import {deleteItem} from "./deleteItem.mjs";
import {updateItem} from "./updateItem.mjs";

class actutItems {
    constructor() {
        this.table = document.getElementById('itemsList');
    }

    actut = () => {
        this.table.innerHTML = "";
        // Iterate over localStorage and insert into table
        for (let i=0; i < localStorage.length; i++) {
            if (localStorage.key(i).substring(0, 4) == 'Item') {
                let tr = document.createElement('tr');
                this.table.appendChild(tr);
                tr.innerHTML = "<td id='"+ localStorage.key(i) +"'>"+ localStorage.getItem(localStorage.key(i)) +"</td>" +
                    "<td class='action'>" +
                    "<i class=\"far fa-check-circle\" data-id='" + localStorage.key(i) + "'></i>" +
                    "<i class=\"fas fa-edit\" data-id='" + localStorage.key(i) + "'></i>" +
                    "<i class=\"far fa-times-circle\" data-id='" + localStorage.key(i) + "'></i>" +
                    "</td>";
            }
        }
        new checkItem().check();
        new updateItem().edit();
        new deleteItem().delete();
    }
}

export {actutItems};