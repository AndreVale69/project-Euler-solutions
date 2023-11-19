/*
Problem 14: Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n -> n/2 (n is even)
n -> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.
*/
function longestCollatzSequence(limit) {
  let max_chain = 0;
  let res = 0;
  let chain;
  let n;
  let is_the_end;

  for (limit; limit > 0; limit--) {
    // init values
    is_the_end = false;
    n = limit;
    chain = 1;
    while (!is_the_end) {
      // if n is even
      if (n % 2 == 0) {
        n = n / 2;
        // check if it's the end of the chain
        if (n == 1) {
          chain++;
          // check if it's the maximum chain
          if (chain > max_chain) {
            max_chain = chain;
            res = limit;
          }
          // break while
          is_the_end = true;
        }
      }
      else // otherwise is odd
        n = (3 * n) + 1
      chain++;
    }
  }
  return res;
}

console.log(longestCollatzSequence(1000000));