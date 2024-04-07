// 1. 
function Binarysearch(arr, val) {

    let left = 0, right = arr.length - 1;
    while (true) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;

}

// console.log(StartAndEndTarget([1, 2, 3, 4, 5, 6, 7, 8], 6));

function StartAndEndTarget(arr, target) {
    if (arr.length === 0) return [-1, -1];
    const firstPos = Binarysearch(arr, target);
    if (firstPos === -1) {

    }
}