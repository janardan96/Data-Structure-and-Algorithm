function threeSum1(arr) {
    const setofArray = {};

    for (let i = 0; i < arr.length; i++) {
        const obj = {};
        for (let j = i + 1; j < arr.length; j++) {
            let findNumber = - (arr[i] + arr[j]);
            if (obj[String(findNumber)]) {
                const array = [arr[i], arr[j], findNumber].sort((a, b) => a - b);
                setofArray[String(array)] = array;
            } else {
                obj[String(arr[j])] = String(arr[j]);
            }
        }
    }
    return Object.values(setofArray)
}

function threeSum2(arr) {

    const setofArray = {};
    const sortedArr = arr.sort((a, b) => a - b);
    let i = 0;
    let j = i + 1;
    let k = arr.length - 1;

    while (i < sortedArr.length) {
        if (setofArray[i - 1] === sortedArr[i]) {
            i++;
        } else {

            if (j < k) {
                let value = sortedArr[i] + sortedArr[j] + sortedArr[k]
                if (value === 0) {
                    let array = [arr[i], arr[j], arr[k]]
                    setofArray[String(array)] = array;
                    j++;
                    k--
                } else if (value < 0) {
                    j++;
                } else {
                    k--
                }
            } else {
                i++;
                j = i + 1;
                k = arr.length - 1;
            }
        }

    }
    return Object.values(setofArray)
}

function threeSum3(arr) {
    const setofArray = {};
    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && sortedArr[i - 1] === sortedArr[i]) continue;

        let j = i + 1;
        let k = sortedArr.length - 1;

        while (j < k) {
            let value = sortedArr[i] + sortedArr[j] + sortedArr[k]
            if (value === 0) {
                let array = [arr[i], arr[j], arr[k]]
                setofArray[String(array)] = array;
                j++;
                k--
                while (j < k && sortedArr[j] === sortedArr[j - 1]) {
                    j++
                }
                while (j < k && sortedArr[k] === sortedArr[k + 1]) {
                    k--
                }
            } else if (value < 0) {
                j++;
            } else {
                k--
            }
        }
    }
    return Object.values(setofArray)

}


console.log(threeSum3([-1, 0, 1, 2, -1, -4]))