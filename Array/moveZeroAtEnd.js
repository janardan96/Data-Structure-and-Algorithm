function moveZeroAtEnd(nums) {
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            index = i;
            break;
        }
    }

    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] !== 0 && index >= 0) {
            let temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
            index++;
        }
    }

    console.log(nums)
}


moveZeroAtEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1])