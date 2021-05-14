console.log('Array');

// normal Approach;
function reverseArray(array) {
    for (let index = 0; index < Math.floor((array.length) / 2); index++) {
        const temp = array[(array.length - 1) - index];
        array[(array.length - 1) - index] = array[index];
        array[index] = temp;
    }
    return array;
}

// let reverseOutput = reverseArray([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(reverseOutput);


// Recursion
function reverseArrayRecursion(arr, firstIndex = 0, lastIndex = arr.length - 1) {
    if (firstIndex >= lastIndex) return arr;
    // const temp = arr[firstIndex];
    // arr[firstIndex] = arr[lastIndex];
    // arr[lastIndex] = temp;
    [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex], arr[firstIndex]];
    reverseArrayRecursion(arr, firstIndex + 1, lastIndex - 1);
    return arr;
}

let reverseOutput = reverseArrayRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(reverseOutput);