function Maximum(num1, num2, num3, num4, num5, num6, num7, num8) {
    var max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
var num1 = 23;
var num2 = 89;
var num3 = 6;
var num4 = 29;
var num5 = 56;
var num6 = 45;
var num7 = 77;
var num8 = 32;
var maxNum = Maximum(num1, num2, num3, num4, num5, num6, num7, num8);
console.log("Maximum number is ".concat(maxNum));
