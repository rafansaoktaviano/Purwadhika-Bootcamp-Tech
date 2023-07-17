let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;
function sockMerchant(ar) {
  // Write your code here
  let hasil = 0;
  //   0   1   2   3    4  5   6   7   8

  // (1, 1, 3, 1, 2, 1, 3, 3, 3, 3,)
  let sort = ar.sort(function (a, b) {
    return a - b;
  });
  //   console.log(sort);
  for (let i = 0; i < n; i++) {
    if (sort[i] === sort[i + 1]) {
      i++;
      hasil++;
    }
  }
  return hasil;
}

console.log(sockMerchant(ar));
