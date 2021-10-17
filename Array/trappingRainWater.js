// O(n^2)

const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappedRainWater = (arr) => {
    let totalWater = 0;
    for (let i = 0; i < arr.length; i++) {
        let leftI = i, rightI = i, maxLeft = 0, maxRight = 0;
        while (leftI >= 0) {
            maxLeft = Math.max(maxLeft, arr[leftI]);
            leftI--;
        }
        while (rightI < arr.length) {
            maxRight = Math.max(maxRight, arr[rightI]);
            rightI++;
        }
        const currentWater = Math.min(maxLeft, maxRight) - arr[i];
        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }
    return totalWater;
}

console.log(getTrappedRainWater(arr));

// Optimize(O(n))
const getTrappedRainWater2 = (array) => {
    let left = 0, right = array.length - 1, left_max = 0, right_max = 0, total = 0;
    while (left < right) {
        if (array[left] <= array[right]) {
            if (array[left] >= left_max) {
                left_max = array[left];
            } else {
                total += left_max - array[left];
            }
            left++;
        } else {
            if (array[right] >= right_max) {
                right_max = array[right];
            } else {
                total += right_max - array[right];
            }
            right--;
        }
    }
    return total;
}

console.log(getTrappedRainWater2(arr));
