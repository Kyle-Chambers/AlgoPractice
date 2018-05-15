// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     for (let i = 0; i < Math.floor(str.length / 2); i++){
//         if (str[i] !== str[str.length -1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// function palindrome(str) {
//     return str.split('').every((ele, i) => {
//         return ele === str[str.length -1 - i];
//     });
// }

function palindrome(str) {
    return str === str.split('').reverse().join('');
}

module.exports = palindrome;
