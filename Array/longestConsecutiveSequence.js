var longestConsecutive = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = String(nums[i])
    }


    let longestConsecutive = 0;

    for (let i = 0; i < nums.length; i++) {
        const previousNumber = nums[i] - 1;
        let count = 0;
        if (!obj[previousNumber]) {
            count++;
            let x = nums[i];
            while (obj[x + 1]) {
                x = x + 1;
                count++
            }
            longestConsecutive = Math.max(longestConsecutive, count)
        }
    }

    return longestConsecutive
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));