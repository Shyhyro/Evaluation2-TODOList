class checkItem {
    constructor() {
        this.checkThis = document.querySelectorAll(".fa-check-circle");
    }

    check = () => {
        this.checkThis.forEach(function (e) {
            e.addEventListener('click', function () {
                let id = e.dataset.id;
                e.style.color = "#95D6B7";
                console.log("Check: " + id);
            })
        })
    }
}

export {checkItem};