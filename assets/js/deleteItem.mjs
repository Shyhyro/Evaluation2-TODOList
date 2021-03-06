import {actutItems} from "./actutItems.mjs";
import {createChart} from "./CreateChart.mjs";

class deleteItem {
    constructor() {
        this.deleteThis = document.querySelectorAll(".fa-times-circle");
    }

    delete = () => {
        this.deleteThis.forEach(function (e) {
            e.addEventListener('click', function () {
                let id = e.dataset.id;
                localStorage.removeItem(id);
                let count = parseInt(localStorage.getItem("delete")) + 1;
                localStorage.setItem("delete", count);

                setTimeout(new actutItems().actut, 500);
            })
        })
    }
}

export {deleteItem};