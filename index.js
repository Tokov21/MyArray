class Person {
    constructor(firstname) {
        this.firstname = firstname;
        this.indicator = 0;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(newValue) {
        if (typeof newValue !== "string") {
            throw new Error("newValue must be string");
        }

        if (this.indicator >= 3) {
            throw new Error("You can change name only 3 times");
        }

        this._firstname = newValue;

        this.indicator++;
    }
}
