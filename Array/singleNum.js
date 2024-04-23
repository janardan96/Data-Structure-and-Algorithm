var singleNumber = function (arr) {
    let xor1 = 0;
    for (let i = 0; i < arr.length; i++) {
        xor1 = xor1 ^ arr[i];
    }
    return xor1
};

console.log(singleNumber([1, 1, 2, 3, 3, 4, 4]));