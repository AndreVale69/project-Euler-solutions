/*
Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/
function nthPrime(n) {
  // find n prime numbers
  var n_th = 0;
  var num = 2;
  while (true) {
    if (isPrime(num)) {
      n_th++;
      // if it's the n-th, return num
      if (n_th == n)
        return num;
    }
    num++;
  }
}

// from problem 3
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

console.log(nthPrime(10001));