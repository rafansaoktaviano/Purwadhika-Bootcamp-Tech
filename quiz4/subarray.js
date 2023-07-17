function birthday(s, d, m) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < s.length; i++) {
        let result = s.slice(i,i+m)
        console.log(result);
    for (let j = i; j < s.i + m; j++) {
      if (s[i] + s[j] === d) {
        result++;
      }
    }
  }
  return result;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
