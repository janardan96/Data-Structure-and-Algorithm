// 1 time O(a+b);
// Space O(a+b);
function TypedOutString(string) {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] != '#') {
            arr.push(string[i]);
        } else {
            arr.pop();
        }
    }
    return arr.join('');
}

// console.log(TypedOutString('ab#z') === TypedOutString("az#z"));


// Optimized
// 
function backSpaceCompare(string1, string2) {
    let p1 = string1.length - 1, p2 = string2.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (string1[p1] === '#' || string2[p2] === '#') {
            if (string1[p1] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p1--;
                    backcount--;
                    if (string1[p1] === '#') {
                        backcount += 2;
                    }
                }
            }

            if (string2[p2] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p2--;
                    backcount--;
                    if (string2[p2] === '#') {
                        backcount += 2;
                    }
                }
            }
        } else {
            if (string1[p1] !== string2[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true
}

console.log(backSpaceCompare('abb#z', "az#z"))