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

console.log(isValidParentheses('{[]()}'))
