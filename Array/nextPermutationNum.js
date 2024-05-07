let nextPermutation = function (nums) {
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let index = -1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    for (let i = nums.length - 1; i => index; i--) {
        if (nums[i] > nums[index]) {
            swap(nums, i, index);
            break;
        }
    }

    const reverse = () => {
        if (index > -1) {
            let i = index + 1;
            let j = nums.length - 1;
            while (i <= j) {
                swap(nums, i, j);
                i++;
                j--;
            }

        } else {
            nums.reverse();
        }
        return nums;
    }

    return reverse()
}

console.log(nextPermutation([1, 2, 3]))