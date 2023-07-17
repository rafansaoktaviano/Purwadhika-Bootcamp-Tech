function binary(num, x) {
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (num[mid] === x) {
      return mid;
    }
    if (num[mid] > x) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }
}

console.log(binary([10, 20, 30, 40, 50, 60, 70, 80], 30));
