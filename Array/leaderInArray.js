const leaderInArr = (arr) => {
    const length = arr.length
    let newArr = [];
    let max = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (arr[i] >= max) {
            newArr.push(arr[i]);
            max = arr[i]
        }
    }
    return newArr.reverse();
}


console.log(leaderInArr([10, 22, 12, 3, 0, 6]))