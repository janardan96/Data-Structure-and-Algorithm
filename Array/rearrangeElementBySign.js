function rearrange1(nums) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }
    }
    for (let i = 0; i < nums.length / 2; i++) {
        nums[2 * i] = arr1[i];
        nums[2 * i + 1] = arr2[i]
    }

    return nums;
}

function rearrange2(nums) {
    let newArr = [];
    let positive = 0;
    let negative = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArr[positive] = nums[i];
            positive = positive + 2
        } else {
            newArr[negative] = nums[i];
            negative = negative + 2
        }
    }

    return newArr;
}

console.log(rearrange2([3, 1, -2, -5, 2, -4]))