let n = 6;
let k = 3;
let ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let hasil = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cekHasil = ar[i] + ar[j];

      if (cekHasil % k === 0) {
        hasil++;
      }
    }
  }

  return hasil;
}

console.log(divisibleSumPairs(n, k, ar));


function staircase(n) {
    // Write your code here
        let result = "";
    for (let i = 0; i - 1 < n; i++) {
        for (let j = n; j >= 0; j--) {
            if (i > j) {
                result += "#";
            }
            if (i < j) {
                result += " ";
            }
        }
        result += "\n";
    }
    console.log(result)
}

console.log(staircase(n));
