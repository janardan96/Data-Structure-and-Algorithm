const rotateMatrix90deg = (arr) => {
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

console.log(rotateMatrix90deg([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))