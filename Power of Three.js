/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }
    for (let i = 0; i <= n; i++) {
        let a = parseInt(Math.pow(3, i));
        if (a === n) {
            return true;
        }
        else if (a > n) {
            return false;
        }
    }
};
console.log(isPowerOfThree(45));