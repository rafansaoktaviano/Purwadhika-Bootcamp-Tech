function formulaLCM(a, b) {
  let multi = a * b;

  do {
    r = a % b;
    a = b;
    b = r;
  } while (b !== 0);
  return multi / a;
}

console.log(formulaLCM(10,15));
console.log(formulaLCM(5,7));
