// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

let v = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
}

function vowels(str) {
    let vowelCount = 0;
    for (let letter of str.toLowerCase()){
        if (v[letter]){
            vowelCount++;
        }
    }
    return vowelCount;
}

module.exports = vowels;
