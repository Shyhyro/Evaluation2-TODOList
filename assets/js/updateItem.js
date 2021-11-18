import {actutItems} from "./actutItems";

class updateItem {
    constructor() {
        this.editThis = document.querySelectorAll(".fa-edit");
    }

    edit = () => {
        this.editThis.forEach(function (e) {
            e.addEventListener('click', function () {
                let id = e.dataset.id;
                console.log("Edit: " + id);
                let content = document.getElementById(id);

            })
        })
    }
}

export {updateItem};