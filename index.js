class MyArray {
    constructor(...rest) {
        // this.array = {};

        for (let i = 0; i < rest.length; i++) {
            this[i] = rest[i];
        }

        this.length = rest.length;
    }

    push(...any) {
        for (let i = 0; i < any.length; i++) {
            this[this.length + i] = any[i];
        }

        return (this.length += any.length);
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const lastElement = this[this.length - 1];

        delete this[this.length - 1];
        this.length -= 1;

        return lastElement;
    }

    unshift(...items) {
        const keys = Object.keys(this);
        const values = Object.values(this);
        const arr = {};

        for (let i = 0; i < this.length; i++) {
            if (keys[i] === "length") {
                break;
            }
            keys[i] = Number(keys[i]);
            keys[i] += items.length;
            arr[keys[i]] = values[i];
        }

        this.length += items.length;

        Object.assign(this, items, arr);

        return this.length;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const firstElement = this[0];

        delete this[0];
        this.length--;

        const keys = Object.keys(this);
        const values = Object.values(this);
        const arr = {};

        for (let i = 0; i < this.length; i++) {
            if (keys[i] === "length") {
                break;
            }
            keys[i] = Number(keys[i]);
            keys[i]--;
            arr[keys[i]] = values[i];
        }

        for (let i = 0; i < this.length; i++) {
            delete this[i + 1];
        }

        Object.assign(this, arr);

        return firstElement;
    }

    forEach(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                callbackfn(this[i], i, this);
            }
        }
    }

    map(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        const newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                const result = callbackfn(this[i], i, this);

                newArray.push(result);
            }
        }

        return newArray;
    }

    includes(searchElement, fromIndex) {
        let bool;

        if (fromIndex === undefined) {
            fromIndex = 0;
        }

        for (let i = fromIndex; i < this.length; i++) {
            if (searchElement === this[i]) {
                bool = true;
                break;
            }
            bool = false;
        }

        return bool;
    }

    slice(start, end) {
        const newArray = new MyArray();

        if (start === undefined) {
            start = 0;
        }

        if (start < 0) {
            start += this.length;
        }

        if (end === undefined) {
            end = this.length;
        }

        if (end < 0) {
            end += this.length;
        }

        for (let i = start; i < end; i++) {
            newArray.push(this[i]);
        }

        return newArray;
    }

    splice(start, deleteCount, ...items) {
        const newArray = new MyArray();

        // console.log(deleteCount);

        if (deleteCount > 0) {
            for (let i = 0; i < deleteCount; i++) {
                newArray.push(this[start + i]);
                delete this[start + i];
            }
            // console.log(...items);
            // console.log(this);

            for (let i = this.length - 1; i >= start; i--) {
                if (this[i] !== undefined) {
                    this[i + deleteCount] = this[i];
                }
            }

            for (let i = 0; i < items.length; i++) {
                this[start + i] = items[i];
            }

            this.length = this.length + items.length - deleteCount;
            // this[start] = items;
            // this[start] = [...this[start]];

            // console.log(...this[start]);

            // Object.
            // [this[start]] = [...items];
            // this.length += items.length;

            const newArr = new MyArray();

            // console.log(this);

            this.forEach((v) => {
                newArr.push(v);
            });

            // console.log(newArr);

            // console.log(this.length);
            // for (let i = start; i < deleteCount; i++) {
            //     this[start] = this.slice();
            // }

            // Reset array
            // for (let i = 0; i < this.length; i++) {
            //     delete this[i];
            // }

            Object.assign(this, newArr);
            console.log(this);
        }

        if (deleteCount === undefined) {
            for (let i = start; i < this.length; i++) {
                newArray.push(this[i]);
                delete this[i];
            }

            for (let i = start; i <= items.length; i++) {
                if (this[i] !== undefined) {
                    this[i + items.length - deleteCount] = this[i];
                }
            }

            for (let i = 0; i < items.length; i++) {
                this[start + i] = items[i];
            }

            this.length = this.length - deleteCount + items.length;

            //Create a new arr and push values from this
            // const newArr = new MyArray();

            // this.forEach((v) => {
            //     newArr.push(v);
            // });

            // // Reset array
            // for (let i = 0; i < this.length; i++) {
            //     delete this[i];
            // }

            // Object.assign(this, newArr);
        }

        return newArray;
    }
}

const arr = new MyArray(1, "test23", 3, "dad");

console.log(arr);

const arr1 = new Array(1, "test23", 3, "dad");

console.log(arr1);

arr1.push();
arr1.splice();
