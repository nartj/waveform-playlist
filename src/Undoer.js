export default class Undoer {
    constructor() {
        this.events = []
    }

    push(event) {
        this.events.push(event);
    }

    pop() {
        if (this.events.length > 0) {
            this.events.pop()();
        }
    }
}
