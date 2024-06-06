function maximumProductSubArr(nums) {
    let prefix = 1;
    let sufix = 1;
    let ans = nums.length === 1 ? nums[0] : 0;
    const size = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        if (prefix === 0) prefix = 1;
        if (sufix === 0) sufix = 1;
        prefix = prefix * nums[i]
        sufix = sufix * nums[(size - i)]
        ans = Math.max(ans, Math.max(prefix, sufix));
    }
    return ans;
}

console.log(maximumProductSubArr([-2, 0, -1]))