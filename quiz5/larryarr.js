// function larrysArray(A) {
// let test = 0

//         for(let i = 0; i < A.length; i++) {
//             for(let j = i+1; j < A.length; j++) {
//                 if(A[i] > A[j]) {
//                     test++
//                 }
//             }
//         }

// if(test % 2 === 0) {
//     return "YES"
// } else {
//     return "NO"
// }
// return test

// }

function larrysArray(A) {
  // Write your code here
  let test = 0;
  for (let i = 1; i < A.length; i++) {
    let numberToInsert = A[i];

    let j = i - 1;
    while (j >= 0 && A[j] > numberToInsert) {
      A[j + 1] = A[j];
      j = j - 1;
      test++;
    }
    A[j + 1] = numberToInsert;
  }
  if (test % 2 === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(larrysArray([1, 6, 5, 2, 4, 3]));
