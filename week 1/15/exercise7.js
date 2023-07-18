// Write a code that calculates the sum of all elements of a two-dimensional array

function multiArr(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j];
    }
  }
  return result
}


console.log(multiArr([[1,2,3],[4,5,6],[7,8,9]]));