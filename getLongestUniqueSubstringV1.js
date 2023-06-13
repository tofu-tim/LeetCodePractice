/* the goal of the algorithm is to iterate through a string and find the longest sublist of unique characters.
Example 1: 'bbbbbbbb' returns 'b'.
Example 2: 'aabcddeeffgg' returns 'abc'
*/

function getLongestUniqueSubstring(string) {
    let stringArray = string.split('')

    function checkUniqueValues(stringArray) {
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray.indexOf(stringArray[i]) !== i) {
                return false;
            }
        }
        return true;
    }
}

console.log(getLongestUniqueSubstring('HAVANNA'));