const checkArmstrong = (num: number): string => {
  const numStr = num.toString();
  const len = numStr.length;

  let sum = 0;
  for (let i = 0; i < len; i++) {
    const digit = parseInt(numStr[i]);
    sum += digit ** len;
  }

  if (sum === num) {
    return "It is Armstrong number";
  } else {
    return "It is not Armstrong number";
  }
};

const num = 153;
console.log(checkArmstrong(num));
