// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the
// input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of
// the same type.

function isValid(string) {
    var leftSymbols = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
            leftSymbols.push(string[i]);
        } else if (string[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            leftSymbols.pop();
        } else if (string[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
            leftSymbols.pop();
        } else if (string[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
            leftSymbols.pop();
        } else {
            return false;
        }
    }
    return leftSymbols.length === 0;
}

test1 = isValid("{{{{}}}}");
test2 = isValid("(){}[]");
test3 = isValid("({[]})");
test4 = isValid("(}(){}[]");

console.log(test1); // Output: true
console.log(test2); // Output: true
console.log(test3); // Output: true
console.log(test4); // Output: false