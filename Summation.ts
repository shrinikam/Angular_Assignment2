function Summation(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers: number[] = [23, 6, 7, 4, 5, 7];
const result: number = Summation(numbers);
console.log(`Addition is ${result}`);
