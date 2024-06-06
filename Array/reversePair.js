
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

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            k++
            i++;
        } else {
            arr[k] = arr2[j];
            k++
            j++;

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
}

function countPair(arr, low, midPoint, high) {
    let right = midPoint + 1;
    let count = 0;
    for (let i = low; i <= midPoint; i++) {
        while (right <= high && arr[i] > 2 * arr[right]) {
            right++;
        }
        count += (right - (midPoint + 1))
    }
    return count;
}



function reversePairMergeSort(arr, low = 0, high = arr.length - 1) {
    let count = 0;
    if (low >= high) return count;
    let midPoint = Math.floor((low + high) / 2);
    count += reversePairMergeSort(arr, low, midPoint)
    count += reversePairMergeSort(arr, midPoint + 1, high);
    count += countPair(arr, low, midPoint, high);
    mergeSort(arr, low, midPoint, high);
    return count;
}




