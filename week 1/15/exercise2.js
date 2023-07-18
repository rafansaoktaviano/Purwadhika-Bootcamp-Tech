// Write a code to find GCD of two numbers → use while.

function formulaGCD(a, b) {
    // r = a % b; // 12
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log(formulaGCD(45, 20));
