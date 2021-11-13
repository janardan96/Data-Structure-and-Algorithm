function selectionSort(arr, val) {

    for (var i = 0; i < arr.length; i++) {
        var minVal = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minVal]) {
                minVal = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minVal];
        arr[minVal] = temp;
    }
    return arr;

}

selectionSort([5, 2, 3, 4, 6])