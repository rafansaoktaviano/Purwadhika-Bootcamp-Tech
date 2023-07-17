function nonDivisibleSubset(k, s) {
  // Write your code here
  let mod = new Map();
  for (let i = 0; i < k; i++) {
    mod[i] = 0;
  }
  for (let x of s) {
    mod[x % k] += 1;
  }
  console.log(mod);
  let res = 0 
  if(mod[0] > 0) {
    res++
  }
  for(let i = 1; i < k;i++) {
    if(mod[i] == 0) {
      continue
    } else if (i+i == k){
      res++
    }else {
      res+= Math.max(mod[i], mod[k - i])
      mod[i] = 0
      mod[k - i] = 0
    }
  }
  return res
}

// console.log(
//   nonDivisibleSubset(
//     7,
//     [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
//   )
// );
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
