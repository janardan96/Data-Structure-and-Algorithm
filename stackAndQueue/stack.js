class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

const parens = {
    '(': ')',
    '[': ']',
    '{': '}'
}
function isValidParentheses(s) {
    if (s.length === 0) return true;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (parens[s[i]]) {
            stack.push(s[i]);
        } else {
            let left = stack.pop();
            let correctBracket = parens[left];
            if (s[i] !== correctBracket) {
                return false;
            }
        }
    }
    return true;

}

// console.log(isValidParentheses('{[]()}'));

const minRemoveToMakeValid = (str) => {
    const res = str.split('');
    const stack = [];
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }
    while (stack.length) {
        const currIndex = stack.pop();
        res[currIndex] = '';
    }
    return res.join();
}

console.log(minRemoveToMakeValid('))(('));
