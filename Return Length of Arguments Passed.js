/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length;
};
const args = [{}, null, "3"];
console.log(argumentsLength(args));
/**
 * argumentsLength(1, 2, 3); // 3
 */