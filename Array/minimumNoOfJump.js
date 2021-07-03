function minimumJump(arr, n = arr.length) {
    if (n === 0) return 0;

    if (arr[0] === 0) return -1;
    let jump = 1;
    let maxrange = arr[0];
    let step = arr[0];

    let i = 1;
    while (i < n) {
        if (i === n - 1) return `No. of jumps required is ${jump}`;

        step--;
        if (step == 0) {
            maxrange = Math.max(maxrange, arr[i]);

            jump++;

            // if (i >= maxrange) return -1;

            step = maxrange;

        }
        i++
    }

    return -1;

}

// console.log(minimumJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))


function minJumps(arr, n = arr.length) {
    // debugger
    if (n <= 1)
        return 0;
    if (arr[0] == 0)

        return -1;

    let maxReach = arr[0];

    let step = arr[0];

    let jump = 1;

    let i = 1;

    for (i = 1; i < n; i++) {

        if (i == n - 1) return jump;


        step--;

        if (step == 0) {
            maxReach = Math.max(maxReach, arr[i]);
            jump++;

            // if (i >= maxReach) return -1;

            step = maxReach;

        }

    }
    return jump;
}

console.log(minJumps([1, 3, 5, 8, 4, 2, 6, 7, 6, 8, 9]))