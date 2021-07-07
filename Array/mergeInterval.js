function mergeInterval(arr) {
    const newArr = [];
    const sortedArray = arr.map(ele => ele.sort((a, b) => a - b));
    let i = 0;
    let j = 1;
    if (sortedArray.length === 1) {
        return sortedArray;
    }
    while (i < arr.length) {
        if (sortedArray[i][1] >= sortedArray[j][0] && sortedArray[j][1] >= sortedArray[i][1]) {
            // if (sortedArray[i][0] < sortedArray[j][0]) {
            //     newArr.push([sortedArray[i][0], sortedArray[j][1]]);
            // }
            // else {
            //     newArr.push([sortedArray[j][0], sortedArray[i][1]]);
            // }
            let minVal = Math.min(sortedArray[i][0], sortedArray[i][1], sortedArray[j][0], sortedArray[j][1]);
            let maxVal = Math.max(sortedArray[i][0], sortedArray[i][1], sortedArray[j][0], sortedArray[j][1]);
            newArr.push([minVal, maxVal]);
            i = j + 1;
            j = i + 1;

        } else {
            newArr.push([sortedArray[i][0], sortedArray[i][1]]);
            i = i + 1;
            j = j + 1;
        }

        if (i === arr.length - 1) {
            j = i
        }
    }
    return newArr

}

console.log(mergeInterval([[1, 4], [0, 0]]));