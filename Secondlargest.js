function Maximum(numbers) {
    if (numbers.length < 2) {
        throw new Error("Array must have at least two numbers.");
    }
    var max = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    var secondMax = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > secondMax && numbers[i] < max) {
            secondMax = numbers[i];
        }
    }
    return secondMax;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var secondMax = Maximum(numbers);
console.log("Second Maximum Number is ".concat(secondMax));
