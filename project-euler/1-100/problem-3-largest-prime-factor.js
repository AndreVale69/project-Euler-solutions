/*
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
  if (number == 1)
    return 1;
  var max = 0;
  var index = 0;
  var factors = [];
  // check factors
  for(var i = 1; i <= Math.sqrt(number); i++) {
      if(number % i == 0) {
          factors[index] = i;
          index ++;
      }
  }
  // add itself
  factors[index] = number;
  // check if the factors are prime
  for (var i = 0; i < factors.length; i++){
    if (isPrime(factors[i]) && factors[i] > max)
      max = factors[i];
  }
  // return result
  return max;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

console.log(largestPrimeFactor(5));