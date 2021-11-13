function merge(arr1, arr2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    var midPoint = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, midPoint));
    var right = mergeSort(arr.slice(midPoint));
    return merge(left, right);
}

mergeSort([2, 1, 4, 5, 7, 6, 45, 86, 1321, 0, 12, 864, 23133, 02, 5646])