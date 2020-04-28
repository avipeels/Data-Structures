const { performance } = require('perf_hooks');

function addUptoNMath(n) {
    const sum = n * (n + 1) / 2;
    return sum;
}

let t1 = performance.now();
const sum = addUptoNMath(100);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);
console.log(sum);