/*
Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/
function primeSummation(n) {
  let sum = 0;
  for (let val = 2; val < n; val ++)
    if (isPrime(val))
      sum += val;
  return sum;
}

// from problem 3
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

primeSummation(2000000);