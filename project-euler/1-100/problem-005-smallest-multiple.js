/*
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
  var value_to_check = n * 2;

  while (true) {
    // check if the value is evenly divisible by all of the numbers
    for (var i = n; i > 1; i--)
      if (value_to_check % i != 0)
        break;
      else if (i == 2)
        return value_to_check;
    value_to_check++;
  }
}

console.log(smallestMult(20));