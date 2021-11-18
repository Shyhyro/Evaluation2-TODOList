import {actutItems} from "./actutItems";
import {createChart} from "./CreateChart";

class deleteItem {
    constructor() {
        this.deleteThis = document.querySelectorAll(".fa-times-circle");
    }

    delete = () => {
        this.deleteThis.forEach(function (e) {
            e.addEventListener('click', function () {
                let id = e.dataset.id;
                console.log("Delete: " + id);
                localStorage.removeItem(id);
                let count = parseInt(localStorage.getItem("delete")) + 1;
                console.log(count);
                localStorage.setItem("delete", count);

                setTimeout(new actutItems().actut, 500);
            })
        })
    }
}

export {deleteItem};