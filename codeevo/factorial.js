function fact(num) {
  let resultFact = 1;
  for (let i = 1; i <= num; i++) {
    resultFact *= i;
  }
  return resultFact;
}

console.log(fact(4));


