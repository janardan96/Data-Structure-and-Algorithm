
// Brute Force O(n^2)
function buyAndSell(arr) {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let value = arr[j] - arr[i];
            if (max < value) {
                max = value;
            }
        }

    }
    return max;
}

// console.log(buyAndSell([7, 1, 5, 3, 6, 4]))

// O(n)
function buyAndSell2(array) {
    let min = array[0];
    let max = 0;
    for (let i = 1; i < array.length; i++) {
        const diff = array[i] - min;
        max = Math.max(max, diff);
        min = Math.min(min, array[i])
    }
    return max
}

console.log(buyAndSell2([7, 1, 5, 3, 6, 4]))