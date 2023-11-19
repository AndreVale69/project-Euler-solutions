/*
Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
  var res = 0;
  number --; // because the sum is 'below the provided parameter value'
  for (var i = 0; number > 0; number --)
    if (number % 3 == 0 | number % 5 == 0)
      res += number
  return res;
}

multiplesOf3and5(1000);