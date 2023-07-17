let arr = [4, 2, 5, 1]; // 4 2 5 1
let temp; // 4 4 2 5
function converter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    //   console.log(arr[j]);
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        console.log(arr[j]);
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(converter(arr));
