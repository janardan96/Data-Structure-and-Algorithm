var missingNumber1 = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    const number = nums.length;
    let whileTotal = (number * (number + 1)) / 2
    return whileTotal - sum;
};


var missingNumber2 = function (nums) {
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        xor2 = xor2 ^ nums[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ nums.length;
    return xor1 ^ xor2;
};

console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]))