function rotateCyclically(array) {
    let lastValue = array[array.length - 1];
    for (let index = array.length - 1; index > 0; index--) {
        array[index] = array[index - 1];
    }
    array[0] = lastValue;
    return array
}

console.log(rotateCyclically([1, 2, 3, 4, 5]))