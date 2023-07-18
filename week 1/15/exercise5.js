// Write a code to sort a string alphabetically (with and without sort function)

function sortStr(str) {
  let result = "";
  let test = str.split("");

  for (let i = 1; i < test.length; i++) {
    let charToInsert = test[i];
    let j = i - 1;
    while (j >= 0 && test[j] > charToInsert) {
        test[j + 1] = test[j];
      j = j - 1;
    }
    test[j + 1] = charToInsert;
  }
   result = test.join("")
  return result
}

console.log(sortStr("rafansa"));
