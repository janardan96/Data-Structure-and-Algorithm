// 1 Using quick select algorithm
function pivotPoint(arr, start, end) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }

    var pivot = arr[end]
    var swapIndex = start;

    for (var i = start; i <= end - 1; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
        }
    }
    swap(arr, swapIndex, end);
    return swapIndex;


}

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

let arr = [10, 4, 3, 17, 25, 12, 45, 458]
const result = KthMaxAndMin(arr, 0, arr.length - 1, 7);
console.log(result)


// 2. approach
function swap(array, idxA, idxB) {
    var temp = array[idxA]
    array[idxA] = array[idxB]
    array[idxB] = temp
}
function partitionStart(arr, left, right) {
    var pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
    var storeIdx = left, pivotVal = arr[pivotIdx]
    for (var i = left; i <= right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, storeIdx, i)
            storeIdx++
        }
    }
    return storeIdx;
}

function quickSelectLoop(arr, k) {
    var pivotDist;
    var left = 0, right = arr.length - 1;
    while (right !== left) {
        pivotDist = partitionStart(arr, left, right)
        if (k < pivotDist) {
            right = pivotDist - 1;
        } else {
            left = pivotDist;
        }
    }
    return arr[k]
}

// let arr = [10, 4, 3, 17]
// console.log(quickSelectLoop(arr, 2));