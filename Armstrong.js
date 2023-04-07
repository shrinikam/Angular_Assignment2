var checkArmstrong = function (num) {
    var numStr = num.toString();
    var len = numStr.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        var digit = parseInt(numStr[i]);
        sum += Math.pow(digit, len);
    }
    if (sum === num) {
        return "It is Armstrong number";
    }
    else {
        return "It is not Armstrong number";
    }
};
var num = 153;
console.log(checkArmstrong(num));
