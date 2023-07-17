//LINEAR SEARCH
function linearSearch(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));

// Big-O = O(n)
console.log("================");
// BINARY SEARCH

function binarySearch(n, t) {
  let leftIndex = 0;
  let rightIndex = n.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === n[middleIndex]) {
      return middleIndex;
    }
    if (t < n[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big - O = O(logn)

console.log("================");

// Recursive Binary Search

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
  }
  
  function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1
    }
  
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }
  
    if (target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
