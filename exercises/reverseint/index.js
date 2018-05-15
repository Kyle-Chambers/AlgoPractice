// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// function reverseInt(n) {
//     return n < 0 
//         ? - (Number(reverseString(n.toString().slice(1)))) 
//         : (Number(reverseString(n.toString())));
// }

function reverseInt(n) {
    let reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
