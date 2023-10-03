/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n < 1) {
        return false;
    }
    else {
        for (let i = 0; i <= n; i++) {
            let b = Math.pow(4, i)
            if (b === n) {
                return true;
            }
            if (b > n) {
                return false;
            }
        }
    }
};
console.log(isPowerOfFour(16));