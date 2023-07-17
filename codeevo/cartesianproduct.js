const A = [1, 2];
const B = [3, 4];

function cartesianProduct(A, B) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      result.push([A[i], B[j]]);
    }
  }
  return result
}

console.log(cartesianProduct(A,B));
