function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      right.push(arr[i]);

    }
    if (pivot < arr[i]) {
      left.push(arr[i]);

    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [-6, 20, 8, -2, 4];

console.log(quickSort(arr));
