function Summation(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
var numbers = [23, 6, 7, 4, 5, 7];
var result = Summation(numbers);
console.log("Addition is ".concat(result));
