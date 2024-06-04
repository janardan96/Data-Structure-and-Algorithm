function FourSum(arr, target) {
    // debugger;
    const setofArray = {};
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

        for (let j = i + 1; j < sortedArr.length; j++) {
            if (j > i + 1 && sortedArr[j] === sortedArr[j - 1]) continue;
            let k = j + 1;
            let l = sortedArr.length - 1;
            while (k < l) {
                const value = sortedArr[i] + sortedArr[j] + sortedArr[k] + sortedArr[l]
                if (value === target) {
                    let arrValue = [sortedArr[i], sortedArr[j], sortedArr[k], sortedArr[l]];
                    setofArray[String(arrValue)] = arrValue;
                    k++;
                    l--
                } else if (value < target) {
                    k++
                } else {
                    l--
                }
            }

        }

    }
    return Object.values(setofArray)
}

console.log(FourSum([-2, -1, -1, 1, 1, 2, 2], 0))