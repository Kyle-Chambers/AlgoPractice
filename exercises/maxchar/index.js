// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charCount = {};
    let mostRepeated = '';
    let max = 0;

    for (let char of str){
        charCount[char] = charCount[char]++ || 1;
    }

    for (let key in charCount){
        if (charCount[key] > max){
            max = charCount[key];
            mostRepeated = key;
        }
    }

    return mostRepeated;
}

module.exports = maxChar;
