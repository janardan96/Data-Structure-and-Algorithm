function findDuplicateInArray(arr) {
    let newArr = [];

    let sortedArray = arr.sort((a, b) => a - b);

    for (let index = 1; index < sortedArray.length; index++) {
        if (sortedArray[index - 1] === sortedArray[index]) {
            newArr.push(sortedArray[index]);
        }
    }

    return `Duplicates values in array is ${newArr}`
}

console.log(findDuplicateInArray([1, 2, 3, 1, 3, 6, 6]));