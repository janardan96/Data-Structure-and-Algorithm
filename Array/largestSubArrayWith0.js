function largestSubArraySum0(arr) {
    let max = 0
    let sum = 0
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]

        if (sum === 0) {
            max = Math.max(max, i + 1)
        }

        if (map.has(sum)) {
            max = Math.max(max, i - map.get(sum) + 1)
        }

        if (!map.has(sum)) {
            map.set(sum, i + 1)
        }
    }
    return max

}

console.log(largestSubArraySum0([15, -2, 2, -8, 1, 7, 10, 23]))