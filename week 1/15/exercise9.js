function half(arr) {
  let mid = arr.length / 2;
  let mid2 = [arr[mid]];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < mid) {
      left.push(arr[i]);
    } else if (i > mid) {
      right.push(arr[i]);
    }
  }
  // return mid;

  mid2.concat(left);

  return mid2.concat(left, right);
}

console.log(
  half([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
);
