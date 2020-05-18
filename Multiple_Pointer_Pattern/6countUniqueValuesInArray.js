const { performance } = require('perf_hooks');
function countUniqueValuesInArray(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

let t1 = performance.now();
const uniqueValues = countUniqueValuesInArray([1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6,7,8]);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);
console.log(uniqueValues);