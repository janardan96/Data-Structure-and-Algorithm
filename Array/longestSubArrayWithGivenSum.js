function longestSum(arr, k) {
    let obj = {};
    let returnLength = 0;
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (i === 0) {
            obj[value] = k - value;
            length = 1;
        } else {
            const remainingValue = obj[arr[i - 1]] - value;
            if (value === k) {
                returnLength = Math.max(length + 1, returnLength);
            }
            else if (remainingValue === 0) {
                returnLength = Math.max(length + 1, returnLength);
            } else if (remainingValue >= 0) {
                obj[value] = remainingValue;
                length++
            } else {
                obj = {};
                obj[value] = k - value;
                length = 1
            }

        }
    }
    return returnLength
}

function withTwoPointer(arr, k) {
    let sum = arr[0];
    let left = 0;
    let right = 1;
    let length = 0;

    while (left < right && right < arr.length) {
        sum = sum + arr[right];
        if (sum === k) {
            const currentLength = (right - left)
            length = Math.max(length, currentLength)

        } else if (sum > k) {
            sum = sum - arr[left];
            left = left + 1;
        }

        right++
    }
    return length + 1
    // for (let i = 1; i < arr.length; i++) {
    //     sum = sum + arr[i];
    //     if (sum === k) {
    //         const currentLength = (i - lastIndex) + 1
    //         length = Math.max(length, currentLength)
    //     } else if (sum > k) {
    //         sum = sum - arr[lastIndex];
    //         lastIndex = lastIndex + 1;
    //     } 
    // }

}

console.log(withTwoPointer([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))