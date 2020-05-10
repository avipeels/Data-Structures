function same(array1, array2) {
    // compare length of both arrays
    if (array1.length !== array2.length) {
        return false;
    }
    let firstArrayFrequencyCounter = {};
    let secondArrayFrequencyCounter = {};
    // iterate through 1st array to calculate frequency
    for (let val of array1) {
        firstArrayFrequencyCounter[val] = (firstArrayFrequencyCounter[val] || 0) + 1;
    }
    // iterate through 2nd array to calculate frequency
    for (let val of array2) {
        secondArrayFrequencyCounter[val] = (secondArrayFrequencyCounter[val] || 0) + 1;
    }
    for (const key in firstArrayFrequencyCounter) {
        // check if all the first arrays frequency has a squared mapping in second array
        if (!(key ** 2 in secondArrayFrequencyCounter)) {
            return false;
        }
        // check if frequency matches
        if (secondArrayFrequencyCounter[key ** 2] !== firstArrayFrequencyCounter[key]) {
            return false;
        }
    }
    return true;
}

const bothArraysAreSame = same([1, 2, 3], [1, 4, 9]);
console.log(`Both arrays are ${bothArraysAreSame ? 'same' : 'not same'}`);