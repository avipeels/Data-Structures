const { performance } = require('perf_hooks');
function search(arr, val) {
    console.log(val);
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

let t1 = performance.now();
const result = search([1, 5, 8, 11, 24, 56, 67, 76, 89, 94, 110]);
console.log(result);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);