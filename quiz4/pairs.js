function pairs(k, arr) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        // result.push([arr[i], arr[j]]);
        result++
      }
    }
  }
  return result;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));
