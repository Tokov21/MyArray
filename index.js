class Queue {
    constructor() {
        this.queue = {};

        this.head = 0;
        this.tail = 0;

        for (let i = 0; i < arguments.length; i++) {
            this.enqueue(arguments[i]);
        }
    }

    enqueue(element) {
        this.queue[this.tail++] = element;
    }

    dequeue() {
        if (this.tail === this.head) return undefined;

        const element = this.queue[this.head];
        delete this.queue[this.head++];
        // this.tail--;
        return element;
    }
}

const queue1 = new Queue("ass1", 2, 3);
