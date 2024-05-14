// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

function majorityElement(arr) {
    let count1 = 0;
    let count2 = 0;
    let major1 = 0;
    let major2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count1 === 0 && major2 !== arr[i]) {
            count1 = 1;
            major1 = arr[i]
        } else if (count2 === 0 && major1 !== arr[i]) {
            count2 = 1;
            major2 = arr[i]
        } else if (major1 === arr[i]) {
            count1++
        }
        else if (major2 === arr[i]) {
            count2++
        } else {
            count1--;
            count2--
        }
    }

    count1 = 0;
    count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (major1 === arr[i]) count1++;
        if (major2 === arr[i]) count2++
    }

    let newArr = [];
    if (count1 > Math.floor(arr.length / 3)) {
        newArr.push(major1)
    }

    if (count2 > Math.floor(arr.length / 3) && major1 !== major2) {
        newArr.push(major2)
    }

    return newArr;
}


console.log(majorityElement([0, 0, 0]))