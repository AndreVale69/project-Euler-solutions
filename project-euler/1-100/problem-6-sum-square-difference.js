/*
Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/
var EXPONENT = 2;

function sumSquareDifference(n) {
  var sum_of_squares = 1;
  for (var base = 2; base <= n; base++)
    sum_of_squares += Math.pow(base, EXPONENT);

  var square_of_sum = 1;
  for (var i = 2; i <= n; i++)
    square_of_sum += i;
  square_of_sum = Math.pow(square_of_sum, EXPONENT);

  return Math.abs(sum_of_squares - square_of_sum);
}

console.log(sumSquareDifference(100));