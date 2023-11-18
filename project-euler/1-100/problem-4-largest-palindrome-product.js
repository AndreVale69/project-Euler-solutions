/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/
function largestPalindromeProduct(n) {
  // assume < 10!
  // create number with n zeros
  var n_digits = n.toString().padEnd(n, '0');
  // create min e.g. n = 3 -> 100
  var min_val = parseInt(n_digits.replace(n, '1'));
  // create max e.g. n = 3 -> 900, 999
  var max_val = n_digits.replace(n, '9');
  max_val = parseInt(max_val.replaceAll('0', '9'));

  // initialize vars
  var max_palindrome = 0;
  var product = 0;

  for (var i = max_val; i >= min_val; i--) {
    for (var j = max_val; j >= min_val; j--) {
      product = '' + i * j;
      // check if the product is palindrome
      if (product == reverseString(product))
        if (parseInt(product) > max_palindrome) {
          max_palindrome = product;
          // the first palindrome found, check the next value
          break;
        }
    }
  }
  return parseInt(max_palindrome);
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

largestPalindromeProduct(2);
