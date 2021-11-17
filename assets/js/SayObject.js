const SayObject = {
    firstname: "John",
    lastname: "Doe",
    item: document.querySelector('#addItem input').value,

    addItem: function () {
        console.log(`Item: ${this.item}`);
    },

    sayGoodbye: function () {
        console.log(`Goodbye ${this.firstname} ${this.lastname}`);
    }
};

export {SayObject};