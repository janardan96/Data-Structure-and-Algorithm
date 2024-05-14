const rotateMatrix90deg1 = (arr) => {
    let newArr = new Array(arr.length).fill(0);

    for (let index = 0; index < arr.length; index++) {
        let subArr = new Array(arr[index].length).fill(0);
        newArr[index] = subArr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let col = (arr[i].length - 1 - i)
            newArr[j][col] = arr[i][j]
        }

    }
    return newArr
}

// time O(n2) and space O(MxN)
const rotateMatrix90deg2 = (arr) => {
    let newArr = new Array(arr.length).fill(0);

    for (let index = 0; index < arr.length; index++) {
        let subArr = new Array(arr[index].length).fill(0);
        newArr[index] = subArr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let col = (arr[i].length - 1 - i)
            newArr[j][col] = arr[i][j]
        }

    }
    return newArr
}


// time O(n2) space O(1)
const rotateMatrix90deg3 = (arr) => {
    for (let row = 0; row < arr.length; row++) {
        for (let col = row + 1; col < arr[row].length; col++) {
            // if (row !== col) {
            let temp = arr[col][row];
            arr[col][row] = arr[row][col];
            arr[row][col] = temp;
            // }
        }

    }

    for (let row = 0; row < arr.length; row++) {
        arr[row].reverse();
    }


    return arr;
}

console.log(rotateMatrix90deg3([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))