function missingAndRepeatingNum(arr, n) {
    let repeatArr = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            repeatArr = arr[i];
        } else {
            sum = sum + arr[i]
        }

    }
    const wholeSum = (n * (n + 1)) / 2;
    const missingSum = wholeSum - sum;
    return [repeatArr, missingSum]
}

function missingAndRepeatingNum2(arr, n) {
    let SN = (n * (n + 1)) / 2;
    let S2N = (n * (n + 1) * (2 * n + 1)) / 6;
    let S = 0;
    let S2 = 0
    for (let i = 0; i < arr.length; i++) {
        S = S + arr[i];
        S2 = S2 + (arr[i] * arr[i])
    }

    let val1 = S - SN; // x-y
    let val2 = S2 - S2N;
    val2 = val2 / val1 //x+y
    let x = (val1 + val2) / 2
    let y = x - val1;
    return [x, y]
}


console.log(missingAndRepeatingNum2([1, 6, 2, 3, 4, 1], 6))