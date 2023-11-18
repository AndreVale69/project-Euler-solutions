/*
Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/
// import mathjs

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  for (let c = sumOfabc - 3; c >= 3; c--)
    for (let b = 2; b < c; b ++)
      for (let a = 1; a < b; a ++)
        if (a + b + c == sumOfabc && Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2))
          return a * b * c;
}

specialPythagoreanTriplet(24);