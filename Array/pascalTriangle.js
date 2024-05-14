// O(n^2)
function pascal(num) {
    const newArr = [];

    for (let i = 0; i < num; i++) {
        const subArr = [];
        for (let j = 0; j <= i; j++) {
            if (i <= 1) {
                subArr.push(1);
            } else {
                if (j === 0 || j === i) {
                    subArr[j] = 1;
                }

                else {
                    subArr[j] = newArr[i - 1][j - 1] + newArr[i - 1][j]

                }
            }
        }
        newArr.push(subArr)
    }

    return newArr;
}


// Question 1
// Tell me the element at the place at Row=5 and Col=3

function pascalOneTypeQuestion_nCr(n, r) {
    let res = 1;
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1)
    }
    return res;
}

// Question 2:  Print the whole row for given row number 
function printWholeRow(n) {
    let res = 1;
    let newArr = [1];
    for (let i = 1; i < n; i++) {
        res = res * (n - i);
        res = res / (i)
        newArr.push(res);
    }
    return newArr;
}

function pascal2(num) {
    const newArr = [];

    for (let i = 0; i < num; i++) {
        newArr.push(printWholeRow(i + 1))
    }


    return newArr;
}
const row = 6;
const col = 3
// console.log(pascalOneTypeQuestion_nCr(row - 1, col - 1))
console.log(pascal2(row))