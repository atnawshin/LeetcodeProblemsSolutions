/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    const toKelvin = parseFloat(celsius + 273.15);
    const toFahrenheit = parseFloat(celsius * 1.80 + 32.00);
    const ans = [];
    ans.push(toKelvin, toFahrenheit)
    return ans;
};
console.log(convertTemperature(36.50));