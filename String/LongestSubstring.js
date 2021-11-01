// O(n^2)
const longestSubString = (s) => {
    if (s.length <= 1) {
        return s.length;
    }
    let longest = 0;
    for (let left = 0; left < s.length; left++) {
        let seenChars = {}, currentLength = 0;
        for (let right = left; right < s.length; right++) {
            const currentChar = s[right];
            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength)
            } else {
                break;
            }
        }
    }
    return longest;
}

// Optimized
const lengthOfLongestSubstring = (s) => {
    if (s.length <= 1) return s.length;
    const seenChar = {};
    let left = 0, longest = 0;
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChar[currentChar];
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seenChar[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}