// const getDigit=(num,index)=>{
// let digitStr=''+num;
// let findDigit=digitStr.charAt((digitStr.length-1)-index);
// return +findDigit;
// }

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digiCount(num) {
    if (num === undefined) return 0
    return ('' + num).length;
}

function mostDigits(nums) {
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digiCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    let maxDigit = mostDigits(nums);
    for (let i = 0; i < maxDigit; i++) {
        let digitBucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBucket[digit].push(nums[j]);
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}

radixSort([45, 62, 556, 45, 896, 789, 6565])