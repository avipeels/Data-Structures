const { performance } = require('perf_hooks');
function validAnagram(str1, str2) {
    //check if lengths of both inputs are same
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let index = 0; index < str1.length; index++) {
        const letter = str1[index];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let index = 0; index < str2.length; index++) {
        const letter = str2[index];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

let t1 = performance.now();
const anagrams = validAnagram('aaza', 'zaa');
console.log(`Both strings are ${anagrams ? 'anagrams' : 'not anagrams'}`);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);