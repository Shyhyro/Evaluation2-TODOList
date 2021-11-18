import {actutItems} from "./actutItems";

class newItem {
    constructor() {
        this.newItem = document.getElementById('newItem');
    }

    add = () =>{
        if (this.newItem.value.length > 0) {
            let id = "Item" + this.newItem.value;
            let tr = document.createElement('tr');
            document.getElementById('itemsList').appendChild(tr);
            tr.innerHTML = "<td>"+ this.newItem.value +"</td>" +
                "<td class='action'>" +
                "<i class=\"far fa-check-circle\" data-id='" + id + "'></i>" +
                "<i class=\"fas fa-edit\" data-id='" + id + "'></i>" +
                "<i class=\"far fa-times-circle\" data-id='" + id + "'></i>" +
                "</td>";
            localStorage.setItem(id, this.newItem.value);

            setTimeout(new actutItems().actut, 500);
        }
    }
}

export {newItem};