var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let tempMax = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tempMax = tempMax + 1;
            max = Math.max(tempMax, max)
        } else {
            tempMax = 0
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))