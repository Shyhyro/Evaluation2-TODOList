import {SayClass} from "../SayClass.mjs";


describe("Simple test de la methode sayHello()", function () {

    const say = new SayClass();

    beforeAll(function () {
        say.firstname = "John";
        say.lastname = "Doe";
    });

    it("Vérification des propriétés - getters", function () {
        const firstname = say.firstname.toLowerCase();
        const lastname = say.lastname.toLowerCase();

        expect(firstname).toEqual("john");
        expect(lastname).toEqual("doe");
    });
});