// function test(str) {
//   let result = 0; // 27
//   for (let i = 0; i < str.length; i++) { // A
//     result =result * 26; // 27 * 26 = 702
//     result += str[i].charCodeAt() - "A".charCodeAt() + 1; // 65-65 + 1 = 1
//     // 702 + 1 = 703
//   }
//   return result;
// }

// console.log(test("AAA")); // 27
// // A == 65

function test1(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      result += 26 ** i + (arr[i].charCodeAt() - "A".charCodeAt() + 1);

      break;
    }
  }
  return result;
}

console.log(test1("z"));


let input = "xfd";
function countExelColumn(input) {
  let indexof = 0;
  let lowerLetter = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < lowerLetter.length; j++) {
      if (input[i] == lowerLetter[j]) {
        // console.log(input[i], lowerLetter[j]);
        // console.log(j);
        indexof += 26 ** (input.length - 1 - i) * (j + 1);
        // console.log(indexof);
      }
    }
  }
  return indexof;
}
console.log(countExelColumn(input));