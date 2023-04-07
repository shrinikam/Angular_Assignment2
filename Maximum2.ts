function Maximum(num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, num7: number, num8: number): number 
{
 let max = num1;
 if (num2 > max) {
 max = num2;
 }
 if (num3 > max) {
 max = num3;
 }
 return max;
}
const num1 = 23;
const num2 = 89;
const num3 = 6;
const num4 = 29;
const num5 = 56;
const num6 = 45;
const num7 = 77;
const num8 = 32;

const maxNum = Maximum(num1, num2, num3, num4, num5, num6, num7, num8);
console.log(`Maximum number is ${maxNum}`);
