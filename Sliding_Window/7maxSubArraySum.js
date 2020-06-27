
function maxSubArraySum(arr,  num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let index = 0; index < arr.length; index++) {
    maxSum += arr[index];
  }
  tempSum = maxSum;
  for (let index = num; index < arr.length; index++) {
    tempSum = tempSum - arr[index - num] + arr[index];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const result = maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result);
