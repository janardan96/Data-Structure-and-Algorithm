// Brute force O(n^2)

function findSumPair(array, value) {
    let pair = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum === value) {
                pair += 1;
            }
        }
    }
    return pair;
}

// console.log(findSumPair([1, 1, 1, 1], 2));

// Optimize version O(n)
function findSumPair2(array, value) {
    debugger;
    let pair = 0;
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = array[i];
        let sum = obj[array[i]] + array[i]
        if (sum === value) {
            pair += 1;
        }
    }
    return pair;
}

console.log(findSumPair2([1, 1, 1, 1], 2));
