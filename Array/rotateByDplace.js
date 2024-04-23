function leftRotateBy1Place(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

function leftRotateByNPlace(arr, k) {
    const newArr = [];
    for (let i = 0; i < k % arr.length; i++) {
        newArr.push(arr[i]);
    }

    for (let i = k % arr.length; i < arr.length; i++) {
        const temp = arr[i];
        arr[i] = arr[i - k % arr.length];
        arr[i - k % arr.length] = temp
    }

    for (let i = 0; i < newArr.length; i++) {
        arr[i + ((k % arr.length + 1))] = newArr[i];
        console.log(newArr[i])
    }
    return { arr, newArr };
}

function rightRotateByNPlace(arr, k) {
    const reverseFn = (arr, start, end) => {
        for (let index = start; index < end; index++) {
            const temp = arr[index];
            arr[index] = arr[end];
            arr[end] = temp;
            end--;
        }
    }
    reverseFn(arr, 0, arr.length - 1);
    reverseFn(arr, 0, (k % arr.length) - 1);
    reverseFn(arr, (k % arr.length), arr.length - 1);
    return { arr };
}

console.log(rightRotateByNPlace([-1, -100, 3, 99], 2))