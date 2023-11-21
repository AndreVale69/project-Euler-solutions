/*
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?
*/
let BASE = 2;

function powerDigitSum(exponent) {
  let number = '' + BigInt(Math.pow(BASE, exponent));
  let sum = 0;
  for (let i = 0; i < number.length; i++)
    sum += parseInt(number[i]);
  return sum;
}

console.log(powerDigitSum(1000));