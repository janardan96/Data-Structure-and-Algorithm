// 1. Simple Approach
function sort012(arr, n = arr.length) {
    let count0 = 0, count1 = 0, count2 = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === 0) {
            count0++;
        }
        if (element === 1) {
            count1++;
        }
        if (element === 2) {
            count2++;
        }
    }

    // Generate Array
    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }
    for (let i = count0; i < (count0 + count1); i++) {
        arr[i] = 1
    }

    for (let i = (count0 + count1); i < n; i++) {
        arr[i] = 2
    }

    return arr;
}

// const result = sort012([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 1]);
// console.log(result);

// 2. Dutch National Flag algorithm
function dutchNationalFlag(arr) {

    function swap(arr, first, second) {
        let temp = arr[second];
        arr[second] = arr[first];
        arr[first] = temp;
    }

    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, mid, low);
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
        else {
            swap(arr, mid, high);
            high--;
        }
    }
    return arr;
}

const result = dutchNationalFlag([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 1]);
console.log(result);
