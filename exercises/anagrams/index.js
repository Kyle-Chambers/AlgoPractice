// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let aLetters = {};
    let bLetters = {};

    if (stringA.length !== stringB.length){
        return false;
    }

    for (let i = 0; i < stringA.length; i++){
        aLetters[stringA[i]] = aLetters[stringA[i]] || 1;
        bLetters[stringB[i]] = bLetters[stringB[i]] || 1;
    }

    for (let key in aLetters){
        if (aLetters[key] !== bLetters[key]) { 
            return false;
        }
    }

    return true;
}


module.exports = anagrams;
