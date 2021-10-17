
const array = [17, 16, 2, 3, 12, 15, 5, 9];

// O(n^2)
const getMaxWaterContainer = (arr) => {
    let maxArea = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const height = Math.min(arr[i], arr[j]);
            const width = j - i;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

// console.log(getMaxWaterContainer(array));

// 2. Optimized Solution O(n)
const getMaxWaterContainer2 = (arr) => {
    let maxArea = 0;
    let a = 0;
    let b = arr.length - 1;
    let newArr = [];
    if (arr.length <= 1) {
        return null;
    }
    while (a < b) {
        const height = Math.min(arr[a], arr[b]);
        const width = b - a;
        const area = height * width;
        let newMaxArea = Math.max(maxArea, area);
        if (newMaxArea > maxArea) {
            maxArea = newMaxArea;
            newArr[0] = arr[a];
            newArr[1] = arr[b];
        }
        if (height === arr[a]) {
            a++;
        } else {
            b--;
        }
    }
    return { maxArea, newArr };
}

console.log(getMaxWaterContainer2(array));

