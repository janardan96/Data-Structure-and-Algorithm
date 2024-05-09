
// Brute Force O(n3)
const setMatrixZero = (arr) => {
    const markRow = (row) => {
        for (let i = 0; i < arr[row].length; i++) {
            if (arr[row][i] !== 0) {
                arr[row][i] = -1
            }
        }
    }

    const markColumn = (column) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][column] !== 0) {
                arr[i][column] = -1
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                markRow(i);
                markColumn(j)
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === -1) {
                arr[i][j] = 0
            }
        }
    }

    return arr;
}

const setMatrixZero2 = (arr) => {
    const rowArr = new Array(arr[0].length).fill(0);
    const colArr = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                rowArr[j] = 1
                colArr[i] = 1
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (colArr[i] || rowArr[j]) {
                arr[i][j] = 0
            }
        }
    }

    return arr;
}


console.log(setMatrixZero2([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))