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
        this.length = 0;
    }
    traverse() {
        var current = this.head
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head
        this.head = this.head.next
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val
            return this
        }
        return false;

    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        var newNode = new Node(val);
        var preNode = this.get(index - 1)
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return this;

    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var pre = this.get(index - 1)
        var current = pre.next;
        pre.next = current.next;
        this.length--;
        return current;
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

    reverseMN(m, n) {
        let head = this.head;
        let current = head;
        let index = 1;
        // let next = current.next;
        let start = head;
        while (index < m) {
            start = current;
            current = current.next;
            index++;
        }

        let newList = null, tail = current;
        while (index >= m && index <= n) {
            const next = current.next;
            current.next = newList;
            newList = current;
            current = next;
            index++
        }
        start.next = newList;
        tail.next = current;
        if (m > 1) {
            return head;
        } else {
            return newList;
        }
    }
}


function findCycle(node) {
    let currentNode = node.head;
    const seenNodes = new Set();
    while (!seenNodes.has(currentNode.value)) {
        if (currentNode.next === null) {
            return false;
        }
        seenNodes.add(currentNode.value);
        currentNode = currentNode.next;
    }
    return currentNode;
}

// Tortoise and hare algo;
function tortoiseHare(node) {
    let hare = node.head, tortoise = node.head;
    while (true) {
        hare = hare.next;
        tortoise = tortoise.next;
        if (hare === null || hare.next === null) {
            return false;
        } else {
            hare = hare.next;
        }
        if (tortoise === hare) break;
    }
    let p1 = head, p2 = tortoise;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

var list = new LinkdList();
list.push("Hello")
list.push("Test1");
list.push("Test2");
list.push("Test3");
list.push("Test4");
list.push("Test5");
// list.reverse();
list.reverseMN(3, 5);

console.log(list);
