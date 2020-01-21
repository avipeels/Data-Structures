function insertElementInMiddleMutable(arr, element) {
    const middle = Math.floor(arr.length / 2);
    arr.splice(middle, 0, element);
    return arr;
}

// const newArray = insertElementInMiddleMutable([2, 3, 6, 8], 5);
// console.log(newArray);

function insertElementInMiddleImmutable(arr, element) {
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    console.log(left);
    const right = arr.slice(middle, arr.length);
    console.log(right);
    const newArray = [...left, element, ...right];
    return newArray;
}
const newArray = insertElementInMiddleImmutable([2, 3, 6, 8], 5);
console.log(newArray);
