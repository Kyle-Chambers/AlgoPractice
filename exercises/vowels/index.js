// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



function vowels(str) {
    let vowelCount = 0;
    let v = ['a','e','i','o','u'];
    for (let letter of str.toLowerCase()){
        if (v.includes(letter)){
            vowelCount++;
        }
    }
    return vowelCount;
}

module.exports = vowels;
