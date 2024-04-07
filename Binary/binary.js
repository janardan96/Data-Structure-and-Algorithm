class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            var current = this.root;
            while (true) {
                if (val === current.value) return undefined
                if (val < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left
                    }

                }
                else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right
                    }
                }
            }

        }

    }

    find(val) {
        if (!this.root) return null
        var current = this.root;
        while (true) {
            if (val === current.value) return current.value;
            if (val < current.value) {
                if (!current.left) {
                    return null;
                }
                current = current.left;
            } else {
                if (!current.right) return null;
                current = current.right;
            }
        }
    }

    sidePrint(side) {
        if (this.root === null) return null;
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current[side];
        }
    }

    BFS() {
        var node = this.root
        var data = [];
        var queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data
    }

    DFSPRE() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return data
    }

    DFSPOST() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value)

        }
        traverse(this.root);
        return data
    }

    DFSIN() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(15);
tree.insert(12);
tree.insert(16);