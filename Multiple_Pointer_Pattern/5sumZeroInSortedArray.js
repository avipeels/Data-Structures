const { performance } = require('perf_hooks');
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sumZero = arr[left] + arr[right];
        if (sumZero === 0) {
            return [arr[left], arr[right]];
        }
        else if (sumZero > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}

let t1 = performance.now();
const sumZeroFirstPair = sumZero([-4, -3, -2, 0, 2, 7, 9]);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);
console.log(sumZeroFirstPair);