/*
Problem 15: Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

image: https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif

How many such routes are there through a given gridSize?
*/
function latticePaths(gridSize) {
  //  (2n)!
  //---------
  //  n! n!
  let numerator = factorial(gridSize * 2);
  let denominator = factorial(gridSize);
  return parseInt(numerator / (denominator * denominator));
}

function factorial(num) {
  let res = 1;
  for (num; num > 0; num--)
    res *= num;
  return res;
}

// test factorial
// console.log(factorial(3) == 6);
// console.log(factorial(7) == 5040);
// console.log(factorial(10) == 3628800);
// console.log(factorial(18) == 6402373705728000);

console.log(latticePaths(20));