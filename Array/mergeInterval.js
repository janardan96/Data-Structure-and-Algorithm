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

// console.log(mergeInterval([[1, 4], [0, 0]]));



function mergeInterval2(intervals) {
    // debugger;
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let curr of intervals) {
        prev = res[res.length - 1]
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(curr[1], prev[1])
        } else {
            res.push(curr)
        }
    }
    return res

}

// console.log(mergeInterval2([[1, 3], [2, 6], [8, 10], [15, 18]]));


function mergeInterval3(arr) {
    let sortedArr = arr.sort(function (a, b) {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    let res = [sortedArr[0]];

    for (let i = 1; i < sortedArr.length; i++) {
        const curr = sortedArr[i];
        let prev = res[res.length - 1];
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(curr[1], prev[1])
            res[res.length - 1] = prev;
        } else {
            res.push(curr);
        }
    }
    return res;
}

console.log(mergeInterval3([[1, 3], [2, 6], [8, 9], [9, 11], [8, 10], [2, 4], [15, 18], [16, 17]]))