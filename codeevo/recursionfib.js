 
 
function recusiveFib(n) {
  if (n < 2) {
    return n;
  }
  return recusiveFib(n - 1) + recusiveFib(n - 2);
}

console.log(recusiveFib(5));


// O(n) - Iterative
// O(2^n)