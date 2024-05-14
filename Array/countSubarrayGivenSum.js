function CountSubarrayGivenSum(arr, k) {
    const store = {
        0: 1
    }
    let preSum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        preSum = preSum + arr[i];
        let previousSubArr = preSum - k;

        if (store[previousSubArr]) {
            count = count + store[previousSubArr];
        }
        if (store[preSum]) {
            store[preSum] = store[preSum] + 1
        } else {
            store[preSum] = 1
        }
    }
    return count;
}

console.log({ result: CountSubarrayGivenSum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3) })