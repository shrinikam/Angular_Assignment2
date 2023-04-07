function Maximum(numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error("Array must have at least two numbers.");
  }
  
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  let secondMax = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > secondMax && numbers[i] < max) {
      secondMax = numbers[i];
    }
  }

  return secondMax;
}
const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
const secondMax = Maximum(numbers);
console.log(`Second Maximum Number is ${secondMax}`);
