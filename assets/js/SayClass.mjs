class SayClass
{
    constructor() {
        this.firstname = "John";
        this.lastname = "Doe";
    };

    /**
     * Say Hello to the object.
     */
    sayHello() {
        return `Hello ${this.firstname} ${this.lastname}`;
    };

    /**
     * Say GodBye to the project.
     */
    sayGoodBye() {
        return `Goodbye ${this.firstname} ${this.lastname}`;
    };

    /**
     * Return the user country weather.
     */
    getWeather() {
        const r = Math.trunc(Math.round(Math.random()));
        return ["Sunny", "Cloudy"][r];
    };
};

export {SayClass};