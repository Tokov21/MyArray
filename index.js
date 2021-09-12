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

        if (deleteCount > 0 && start <= deleteCount) {
            //Add deleted elements to newArray
            if (start >= 0) {
                for (let i = 0; i < deleteCount; i++) {
                    if (this[start + i] !== undefined) {
                        newArray.push(this[start + i]);
                        delete this[start + i];
                    }
                }
            }

            if (start < 0) {
                start += this.length;

                if (start <= 0) {
                    for (let i = 0; i < this.length; i++) {
                        if (this[i] !== undefined) {
                            newArray.push(this[i]);
                            delete this[i];
                        }
                    }
                }

                if (start > 0) {
                    for (let i = 0; i < deleteCount; i++) {
                        if (this[start + i] !== undefined) {
                            newArray.push(this[start + i]);
                            delete this[start + i];
                        }
                    }
                }
            }

            //Add new elements
            if (items.length > 0) {
                // Перенести значения ячеек на items вправо
                for (let i = this.length - 1; i >= deleteCount; i--) {
                    if (this[i] !== undefined) {
                        this[i + items.length - deleteCount] = this[i];
                    }
                }

                // Присвоить ячейкам значения переданные в items
                for (let i = 0; i < items.length; i++) {
                    this[start + i] = items[i];
                }
            }

            //Поменять длину нового массива
            this.length += items.length;

            //Избавиться от empty ячеек
            const newArr = new MyArray();

            this.forEach((v) => {
                newArr.push(v);
            });

            for (let i = items.length; i < this.length; i++) {
                delete this[i];
            }

            Object.assign(this, newArr);
        }

        if (start > deleteCount && deleteCount > 0) {
            //Add deleted elements to newArray
            for (let i = 0; i < deleteCount; i++) {
                if (this[start + i] !== undefined) {
                    newArray.push(this[start + i]);
                    delete this[start + i];
                }
            }

            if (items.length > 0) {
                // Перенести значения ячеек на items вправо
                for (let i = this.length - 1; i >= deleteCount; i--) {
                    if (this[i] !== undefined) {
                        this[i + items.length - deleteCount] = this[i];
                    }
                }

                // Присвоить ячейкам значения переданные в items
                for (let i = 0; i < items.length; i++) {
                    this[start + i] = items[i];
                }
            }

            //Поменять длину нового массива
            this.length += items.length;

            //Избавиться от empty ячеек
            const newArr = new MyArray();

            this.forEach((v) => {
                newArr.push(v);
            });

            Object.assign(this, newArr);
        }

        if (deleteCount === undefined) {
            for (let i = start; i < this.length; i++) {
                newArray.push(this[i]);
                delete this[i];
            }

            for (let i = this.length - 1; i >= start; i--) {
                if (this[i] !== undefined) {
                    this[i + items.length] = this[i];
                }
            }

            for (let i = 0; i < items.length; i++) {
                this[start + i] = items[i];
            }

            this.length = this.length + items.length;

            const newArr = new MyArray();

            this.forEach((v) => {
                newArr.push(v);
            });

            Object.assign(this, newArr);
        }

        if (Number(deleteCount) === 0 || deleteCount < 0) {
            for (let i = this.length - 1; i >= start; i--) {
                if (this[i] !== undefined) {
                    this[i + items.length] = this[i];
                }
            }

            for (let i = 0; i < items.length; i++) {
                this[start + i] = items[i];
            }

            this.length = this.length + items.length;

            const newArr = new MyArray();

            this.forEach((v) => {
                newArr.push(v);
            });

            Object.assign(this, newArr);
        }

        return newArray;
    }

    indexOf(searchElement, fromIndex) {
        if (fromIndex === undefined) {
            for (let i = 0; i < this.length; i++) {
                if (searchElement === this[i]) {
                    return i;
                }
            }
        }

        if (fromIndex >= 0) {
            for (let i = fromIndex; i < this.length; i++) {
                if (searchElement === this[i]) {
                    return i;
                }
            }
        }

        return -1;
    }

    find(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                const result = callbackfn(this[i], i, this);

                if (result) {
                    return this[i];
                }
            }
        }
        return undefined;
    }

    findIndex(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                const result = callbackfn(this[i], i, this);

                if (result) {
                    return i;
                }
            }
        }
        return -1;
    }

    filter(callbackfn, thisArg) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        const newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            if (this[i] !== undefined) {
                const result = callbackfn(this[i], i, this);

                if (result) {
                    newArray.push(this[i]);
                }
            }
        }
        return newArray;
    }

    sort(compareFn) {
        let temp;

        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (this[i] > this[j + 1]) {
                    temp = this[i];
                    this[i] = this[j + 1];
                    this[j + 1] = temp;
                }
            }
        }

        return this;
    }
}

const arr = new MyArray(3, 1, 2, 5, "test23", "ad", "asd", 3, 2, 5, "dad");
console.log(arr);

const arr1 = new Array(3, 1, 2, 5, "test23", "ad", "asd", 3, 2, 5, "dad");
console.log(arr1);

console.log(
    arr1.sort((v, i) => {
        return v + i;
    })
);

console.log(arr.sort());
