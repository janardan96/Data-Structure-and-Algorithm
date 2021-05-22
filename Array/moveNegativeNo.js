// 1. Using quick sort approach
function moveNegative(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i !== j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

// let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
// console.log(moveNegative(arr));

// 2. Two pointer approach
function moveNegative2(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        if (arr[first] < 0 && arr[last] < 0) {
            first++;
        }
        else if (arr[first] > 0 && arr[last] > 0) {
            last--;
        }
        else if (arr[first] > 0 && arr[last] < 0) {
            let temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            first++;
            last--;
        }

        else {
            first++;
            last--;

        }
    }
    return arr;
}

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, -9];
console.log(moveNegative2(arr));