/*
 ! 1 
 */
class Cat {
    constructor(mustache, paws, tail, fur) {
        this.mustache = mustache;
        this.paws = paws;
        this.tail = tail;
        this.fur = fur;
    }

    sayPurr() {
        return `Mrrrr`;
    }

    sayMeow() {
        return `Meow`;
    }
}

class Lion extends Cat {
    constructor(mustache, paws, tail, fur, ruff) {
        super(mustache, paws, tail, fur);

        this.ruff = ruff;
    }

    sayMeow() {
        return `Rrrrr`;
    }
}

class Password {
    constructor(pass) {
        this.pass = pass;
    }

    get showPassword() {
        if (this.passIsShown === undefined) {
            this.passIsShown = true;
            return this.pass;
        }

        return null;
    }
}
