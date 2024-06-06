
//  Simple
function CountInversion(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j] && i < j) count += 1
        }
    }
    return count;
}

// console.log(CountInversion([3, 1, 2]));


// Using mergeSort
function mergeAndCount(arr, l, m, r) {

    // Left subarray
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);

    }

    // Right subarray
    let right = [];
    for (let i = m + 1; i < r + 1; i++) {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        }
        else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
    return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l = 0, r = arr.length - 1) {

    // Keeps track of the inversion count at a
    // particular node of the recursion tree
    let count = 0;
    if (l < r) {
        let m = Math.floor((l + r) / 2);

        // Total inversion count = left subarray count
        // + right subarray count + merge count

        // Left subarray count
        count += mergeSortAndCount(arr, l, m);

        // Right subarray count
        count += mergeSortAndCount(arr, m + 1, r);

        // Merge count
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}


const mergeSort = (arr, low, mid, high) => {
    let arr1 = [];
    let arr2 = [];
    for (let i = low; i <= mid; i++) {
        arr1.push(arr[i]);
    }

    for (let i = mid + 1; i <= high; i++) {
        arr2.push(arr[i]);
    }

    let i = 0;
    let j = 0;
    let k = low;
    let count = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            k++
            i++;
        } else {
            arr[k] = arr2[j];
            k++
            j++;
            // const totalPending = (mid + 1) - (low + i);
            count += (mid + 1) - (low + i);
        }
    }

    while (i < arr1.length) {
        arr[k] = arr1[i]
        i++
        k++;
    }
    while (j < arr2.length) {
        arr[k] = arr2[j]
        j++
        k++;
    }
    return count;

}




function mergeSortArr(arr, low = 0, high = arr.length - 1) {
    let count = 0;

    if (low >= high) return count;
    // if (low < high) {
    let midPoint = Math.floor((low + high) / 2);
    count += mergeSortArr(arr, low, midPoint)
    count += mergeSortArr(arr, midPoint + 1, high)
    count += mergeSort(arr, low, midPoint, high);
    // }


    return count;
}




console.log(mergeSortArr([2, 4, 1, 3, 5]))