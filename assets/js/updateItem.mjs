import {actutItems} from "./actutItems.mjs";

class updateItem {
    constructor() {
        this.editThis = document.querySelectorAll(".fa-edit");
    }

    edit = () => {
        this.editThis.forEach(function (e) {
            e.addEventListener('click', function () {
                let id = e.dataset.id;
                console.log("Edit: " + id);
                let element = document.getElementById(id)
                let content = element.innerText;

                element.innerHTML = "<input id='input"+ id +"' type:'text' value='" + content + "'><button type='button' id='button"+ id +"'>Edit</button>";
                console.log("button"+id);

                document.getElementById('button'+id).addEventListener('click', function (){
                    let value = document.getElementById('input'+id).value;
                    new updateItem().update(value, id);
                    setTimeout(new actutItems().actut, 500);
                })
            })
        })
    }

    update = (value, id) => {
        localStorage.setItem(id, value);
    }
}

export {updateItem};