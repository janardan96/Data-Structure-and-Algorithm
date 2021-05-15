// Helper function for finding the pivot point
function pivotPoint(arr, start, end) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }

    var pivot = arr[start]
    var swapIndex = start;

    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
// Quick select algorithm

// 1 Using Recursion
function KthMaxAndMin(arr, left = 0, right = arr.length - 1, Kth) {

    let pivotIndex = pivotPoint(arr, left, right);
    if (pivotIndex === Kth - 1) {
        return { arr, value: arr[pivotIndex] }
    }

    if (pivotIndex <= Kth - 1) {
        return KthMaxAndMin(arr, pivotIndex + 1, right, Kth);
    }
    else {
        return KthMaxAndMin(arr, left, pivotIndex - 1, Kth);
    }

}

// let arr = [11, 10, 4, 3, 17, 25, 12, 45, 458]
// const result = KthMaxAndMin(arr, 0, arr.length - 1, 4);
// console.log(result)


// 2. Approach  ( Best time complexity)
function MaxAndMin(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    let pivotIndex;

    if (k > arr.length || !k) {
        return 'Out of range or not exist';
    }

    while (true) {
        pivotIndex = pivotPoint(arr, left, right);
        if (k - 1 === pivotIndex) {
            console.log(arr);
            return arr[pivotIndex];
        }
        if (k - 1 > pivotIndex) {
            left = pivotIndex + 1
        }
        else {
            right = pivotIndex - 1
        }
    }

}
let arr = [10, 4, 3, 17, 25, 12, 45, 6, 458]
const result = MaxAndMin(arr, 1);
console.log(result)