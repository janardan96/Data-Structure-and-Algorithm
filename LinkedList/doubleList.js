class Node {
    constructor(val) {
        this.prev = null;
        this.value = val;
        this.next = null;
        this.child = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = current.next;
            this.head.prev = null;
            current.next = null
        }
        this.length--;
        return current;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            var count = 0;
            console.log("From Begning");
            var current = this.head;
            while (count != index) {
                current = current.next;
                count++
            }
        }
        else {
            var count = this.length - 1
            console.log("From Ending");
            var current = this.tail
            while (count != index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        var current = this.get(index)
        if (current) {
            current.value = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        var newNode = new Node(val);
        var current = this.get(index);
        if (current) {
            current.prev.next = newNode;
            newNode.next = current;
            newNode.prev = current.prev;
            current.prev = newNode;
            this.length++;
            return true;
        }
        return false
    }

    insertChild(index, newDoubleNode) {
        var current = this.get(index);
        current.child = newDoubleNode;
    }

    // mergeMultilevel(node) {
    //     // if(node.next===null) return node;
    //     let current = node.head;
    //     debugger;
    //     while (current.next !== null) {
    //         if (current.child) {
    //             const next = current.next;
    //             const child = this.mergeMultilevel(current.child);
    //             current.next = child;
    //             child.tail = next;
    //             next.prev = child.tail;

    //         } else {
    //             current = current.next;
    //         }
    //     }

    //     return node;

    // }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.unshift(val);
        var removedNode = this.get(index);
        if (removedNode) {
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;
            return removedNode;
        }
        return null;

    }
}

var list = new DoubleLinkedList();
list.push("Hello")
list.push("Jd");
list.push("saa");
list.push("Nhi")
list.push("New");

var list2 = new DoubleLinkedList();
list2.push(1);
list2.push(2);
list2.push(3);

list.insertChild(2, list2);

var list3 = new DoubleLinkedList();
list3.push(4);
list3.push(5);
list3.push(6);

list2.insertChild(1, list3);

function mergeMultilevel(node) {
    // if(node.next===null) return node;
    let current = node.head;
    debugger;
    while (current.next !== null) {
        if (current.child) {
            const next = current.next;
            const child = mergeMultilevel(current.child);
            current.child = null;
            current.next = child.head;
            child.head.prev = current
            child.tail.next = next;
            next.prev = child.tail;

        } else {
            current = current.next;
        }
    }

    return node;

}

console.log(mergeMultilevel(list));


