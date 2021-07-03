class Pair {
    constructor(x, y) {
        this.first = x;
        this.second = y;
    }
}
class Solution {

    getMinDiff(arr, n, k) {
        let v = []

        let taken = new Array(n).fill(0);
        // we will store all possible heights in a vector
        for (let i = 0; i < n; i++) {
            if (arr[i] - k >= 0) {
                v.push(new Pair(arr[i] - k, i));
            }
            v.push(new Pair(arr[i] + k, i));
        }

        v.sort((a, b) => {
            if (a.first == b.first) return a.second - b.second;
            return a.first - b.first;
        });

        let elements_in_range = 0;
        let left = 0;
        let right = 0;


        while (elements_in_range < n && right < v.length) {
            if (taken[v[right].second] === 0) {
                elements_in_range++;
            }
            taken[v[right].second]++;
            right++;
        }
        let ans = v[right - 1].first - v[left].first;
        while (right < v.length) {
            if (taken[v[left].second] == 1) {
                elements_in_range--;
            }
            taken[v[left].second]--;
            left++;

            while (elements_in_range < n && right < v.length) {
                if (taken[v[right].second] === 0) {
                    elements_in_range++;
                }
                taken[v[right].second]++;
                right++;
            }

            if (elements_in_range == n) {
                ans = Math.min(ans, v[right - 1].first - v[left].first);
            } else
                break;
        }
        return ans;
    }
}