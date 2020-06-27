const { performance } = require('perf_hooks');
function linearSearch(arr, val) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == val) return index;
    }
    return -1;
}

let t1 = performance.now();
const result = linearSearch([34, 56, 1, 3], 56);
console.log(result);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);