function exercise2(n) {
  let result = [];
  let finalRes = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] === n[j]) {
        n[i] = null;
        n[j] = null;
      }
    }
  }

  for (let k = 0; k < n.length; k++) {
    if (n[k] !== null) {
      finalRes.push(n[k]);
    }
  }

  return finalRes;
}

console.log(exercise2([1, 2, 2, 4, 4, 6,7,4]));

// 1 2 2
