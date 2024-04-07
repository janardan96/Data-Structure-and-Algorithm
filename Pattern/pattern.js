// Print * * * *
//       * * * *
//       * * * *
//       * * * *

function showPatter(numLength) {
    for (let index = 0; index <= numLength; index++) {
        let star = ''
        for (let j = 0; j <= index; j++) {
            star = star + '* '

        }
        console.log({ star })
    }
}


function tri(n) {
    for (let i = 0; i < n; i++) {
        let star = '';
        for (let j = 0; j < n - i - 1; j++) {
            star = ' ' + star;
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            star = star + '*';
        }
        for (let j = 0; j < n - i - 1; j++) {
            star = star + ' ';
        }
        console.log(star)
    }
}

function triInverse(n) {
    for (let i = 0; i < n; i++) {
        let star = '';
        for (let j = 0; j < i; j++) {
            star = ' ' + star;
        }
        for (let k = 0; k < (2 * n - (2 * i + 1)); k++) {
            star = star + '*';
        }
        for (let l = 0; l < i; l++) {
            star = star + ' ';
        }
        console.log(star)
    }
}

function pattern10(n) {
    for (let i = 1; i <= ((2 * n) - 1); i++) {
        let star = '';
        let count = i;
        if (i > n) { count = (2 * n) - i }
        for (let j = 1; j <= count; j++) {
            star = star + "* "
        }
        console.log('index ' + (i) + ' ' + star)
    }
}

function pattern11(n) {
    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            const string = ((i + j) - 1) % 2;
            star = star + string + ' '
        }
        console.log('index ' + (i) + '==> ' + star)
    }
}


function pattern12(n) {
    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star = star + j
        }

        for (let k = 1; k <= (2 * n - (2 * i)); k++) {
            star = star + ' '
        }

        for (let l = n; l >= 1; l--) {
            // reverseString = l + reverseString;
            if (l <= i) {
                star = star + l
            }
        }
        console.log('index ' + (i) + '==> ' + star)
    }
}

function pattern13(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 1; j <= i; j++) {
            str = str + ' ' + num
            num = num + 1
        }
        console.log('index ' + (i) + '==> ' + str)

    }
}

function pattern14(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 0; j < i; j++) {
            str = str + String.fromCharCode(65 + j) + ' '
        }
        console.log('index ' + (i) + '==> ' + str)

    }
}

function pattern15(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 0; j <= n - i; j++) {
            str = str + String.fromCharCode(65 + j) + ' '
        }
        console.log('index ' + (i) + '==> ' + str)

    }
}

function pattern16(n) {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j <= i; j++) {
            str = str + String.fromCharCode(65 + i) + ' '
        }
        console.log('index ' + (i) + '==> ' + str)
    }
}

function pattern18(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 1; j <= i; j++) {
            str = String.fromCharCode((65 + n) - j) + ' ' + str
        }
        console.log('index ' + (i) + '==> ' + str)
    }
}

function pattern19(n) {

    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 0; j <= n - i; j++) {
            star = star + '*'
        }

        for (let k = 0; k < (i - 1) * 2; k++) {
            star = star + ' '
        }

        for (let j = 0; j <= n - i; j++) {
            star = star + '*'
        }
        console.log('index ' + (i) + '==> ' + star);
    }

    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star = star + '*'
        }

        for (let k = 1; k <= (2 * n - (2 * i)); k++) {
            star = star + ' '
        }

        for (let l = n; l >= 1; l--) {
            // reverseString = l + reverseString;
            if (l <= i) {
                star = star + '*'
            }
        }
        console.log('index ' + (i) + '==> ' + star)
    }
}

function pattern20(n) {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                str = str + "*"
            } else {
                str = str + ' '
            }
        }
        console.log('index ' + (i) + '==> ' + str)
    }
}

function pattern21(n) {
    for (let i = 0; i < ((2 * n) - 1); i++) {
        let count = ''
        for (let j = 0; j < ((2 * n) - 1); j++) {
            let top = i;
            let left = j;
            let right = (2 * n - 2) - j;
            let down = (2 * n - 2) - i;
            count = count + Math.min(top, left, right, down)
            // if (i === 1 || i === n || j === 1 || j === n) {
            //     str = str + "*"
            // } else {
            //     str = str + ' '
            // }
        }
        console.log('index ' + (i) + '==> ' + count)
    }
}

function call(n) {
    // tri(n);
    // triInverse(n)
    // pattern10(n)
    // pattern11(n)
    // pattern12(n)
    // pattern13(n)
    // pattern14(n)
    // pattern15(n)
    // pattern16(n)
    // pattern18(n)
    // pattern19(n)
    // pattern20(n)
    pattern21(n)
}

call(4)