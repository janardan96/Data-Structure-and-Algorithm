

// 1
// Linear Search
function minAndMax(arr) {
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    return { min, max };
}

// const result = minAndMax([51, 46, 212, 52, 452, 622, 10, 15, 23, 9, 455, 1000]);
// console.log(result);



// 2 tournament
let minValue, maxValue;

function max(a, b) {
    return Math.max(a, b);
}

function min(a, b) {
    return Math.min(a, b);
}

function tournamentMethod(arr) {
    if (arr.length === 1) {
        let newArr = [arr[0], arr[0]]
        return newArr;
    }
    else if (arr.length === 2) {
        return [arr[0], arr[1]];
    }
    else {
        var midPoint = Math.floor(arr.length / 2);
        var left = tournamentMethod(arr.slice(0, midPoint));
        if (!minValue && !maxValue) {
            maxValue = left[0];
            minValue = left[0];
        }
        maxValue = max(maxValue, max(left[0], left[1]));
        minValue = min(minValue, min(left[0], left[1]));
        var right = tournamentMethod(arr.slice(midPoint));
        maxValue = max(maxValue, max(right[0], right[1]));
        minValue = min(minValue, min(right[0], right[1]));

        return [minValue, maxValue];
    }
}

const result = tournamentMethod([51, 46, 212, 52, 452]);
console.log(result);