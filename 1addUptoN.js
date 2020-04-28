const { performance } = require('perf_hooks');

function addUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let t1 = performance.now();
const sum = addUpToN(100);
let t2 = performance.now();
console.log(`Time Lapse: ${(t2 - t1) / 1000} seconds`);
console.log(sum);