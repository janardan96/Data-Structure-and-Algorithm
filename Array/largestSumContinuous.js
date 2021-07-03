function largestSumContinuous(arr, N = arr.length) {
    var maxint = Math.pow(2, 53)
    var max_so_far = -maxint - 1
    var max_ending_here = 0;
    for (var i = 0; i < N; i++) {
        max_ending_here = max_ending_here + arr[i];
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
        }
    }

    return max_so_far;
}

console.log(largestSumContinuous([-2, -3, -4]))