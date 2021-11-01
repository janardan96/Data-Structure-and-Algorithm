class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkdList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = this.head;
        let next = current.next;
        let prev = null;
        while (next) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}

var list = new LinkdList();
list.push("Hello")
list.push("Test1");
list.push("Test2");
list.push("Test3");
list.reverse();

console.log(list);