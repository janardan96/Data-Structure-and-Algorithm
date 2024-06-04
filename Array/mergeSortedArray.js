
function swap(arr1, arr2, i, j) {
    const temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
}

function mergeSortedArray(nums1, nums2, m, n) {
    let i = 0;
    let j = 0;
    if (n === 0) {
        return nums1;
    }

    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }

        return nums1
    }

    while (i < m + n) {
        if (nums1[i] <= nums2[j] && i < m) {
            i++;
        } else {
            swap(nums1, nums2, i, j);
            if (nums2[j] === 0 && nums1[i] > 0) {
                j++;
            }
            i++

        }

    }

    return nums1.sort((a, b) => a - b)
}




function mergeSortedArray2(nums1, nums2, m, n) {
    let lastIndex = m + n - 1;

    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[lastIndex] = nums1[m - 1]
            m--;
        } else {
            nums1[lastIndex] = nums2[n - 1];
            n--;
        }
        lastIndex--;

    }

    while (n > 0) {
        nums1[lastIndex] = nums2[n - 1];
        lastIndex--
        n--;
    }

    return nums1
}



console.log(mergeSortedArray2([0, 0, 3, 0, 0, 0, 0, 0, 0], [-1, 1, 1, 1, 2, 3], 3, 6))
