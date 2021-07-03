function union(a, b, n = a.length, m = b.length) {
    let set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(a[i]);
    }
    for (let j = 0; j < m; j++) {
        set.add(b[j]);
    }
    return {
        set: set,
        size: set.size
    };
}

console.log(union([1, 2, 3, 4, 5], [1, 2, 3]));

function interSection(arr1, arr2) {
    let i = 0, j = 0;
    let arr = [];

    while (i < arr2.length && j < arr1.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            j++
        }
        else {
            arr.push(arr2[j]);
            i++;
            j++
        }
    }
    return arr;

}

// Array should be shorted;
console.log(interSection([2, 3, 4, 5, 7], [1, 2, 4, 5, 6]));
