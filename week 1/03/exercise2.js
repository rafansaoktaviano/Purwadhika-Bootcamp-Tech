// function tai(word) {
//   let cariString = "ell";

//   let panjangStr = cariString.length;
//   let hasilCari = "";

//   for (let i = 0; i <= word.length - 1; i++) {
//     if (
//       word[i] == cariString[0] &&
//       word[i + 1] == cariString[1] &&
//       word[i + 2] == cariString[2]
//     ) {
//       return "purwadhika"
//     } else {
//       hasilCari += test[i];
//     }

//   }

//   return hasilCari;
// }

// console.log(tai("Hello World tell st cari dell"));

// function removeFirstOccurrence(string, search_string) {
//   const index = string.indexOf(search_string);
//   if (index !== -1) {
//     return string.slice(0, index) + string.slice(index + search_string.length);
//   }
//   return string;
// }

// // Example usage
// const inputString = "Hello, World! hello dell a test string.";
// const searchString = "ell";
// const result = removeFirstOccurrence(inputString, searchString);
// console.log(result);

// let test = "hello World tell st cari dell";
// let cariString = "ell";
// let hasilCari = "";
// let cek1 = "h";
// // let cek2 = ''
// let testIndex = 0;
// // console.log(test);
// for (let i = 0; i < test.length; i++) {
//   // hasilCari += test[i]
//   if (
//     test[i] == cariString[0] &&
//     test[i + 1] == cariString[1] &&
//     test[i + 2] == cariString[2]
//   ) {
//     for (let j = i; j < i + cariString.length; j++) {
//       cek1 += test[j];
//       testIndex = j;
//     }

//     i = testIndex;
//   } else {
//     hasilCari += test[i];
//   }
// }
// console.log(cek1);
// console.log(test);
// console.log(hasilCari);

let kata = "Hello World Tell dell";
let cariString = "ell";
let test = 0;
let hasilCari = "";
let firstOccurrence = true;

for (let i = 0; i < kata.length; i++) {
  if (
    kata[i] === cariString[0] &&
    kata[i + 1] === cariString[1] &&
    kata[i + 2] === cariString[2] &&
    firstOccurrence
  ) {
    for (let j = i; j < i + cariString.length; j++) {
      test = j;
    }
    i = test;
    firstOccurrence = false;
  } else {
    hasilCari += kata[i];
  }
}

console.log(hasilCari);

console.log(test);
console.log();
