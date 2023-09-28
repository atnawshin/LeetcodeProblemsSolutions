/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    /* const n = Math.sqrt(num);
    console.log(n); */
    let a = (Math.sqrt(num));
    //console.log(typeof 2.094);
    //console.log(Number.isInteger(a));

    if (Number.isInteger(a)) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isPerfectSquare(14));