function spiralMatrix(matrix) {


    const newArr = [];

    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++) {
            newArr.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            newArr.push(matrix[i][right]);
        }
        right--;


        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                newArr.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                newArr.push(matrix[i][left]);
            }
            left++;
        }
    }
    return newArr

}


// console.log(spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
console.log(spiralMatrix([[7], [9], [6]]))