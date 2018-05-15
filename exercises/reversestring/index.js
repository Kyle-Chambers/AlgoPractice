// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reversed = '';
//     for (let i = str.length -1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// function reverse(str) {
//     let reversed = '';
//     for (let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     let reversed = '';
//     str.split('').forEach((letter) => {
//         reversed = letter + reversed;
//     })
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, letter) => {
//         return letter + reversed;
//     }, '');
// }

function reverse(str) {
    return str.split('')
            .reverse()
            .join('');
}

module.exports = reverse;
