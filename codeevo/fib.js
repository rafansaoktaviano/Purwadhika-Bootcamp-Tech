let num = 10;

function fibonaci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonaci(5));


// Big-O = o(n)