// 1

const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  result = input * i;
  console.log(result);
}

// 2
// let string = "abba";
// function pali(n) {
//   let right = n.length - 1;
//   let left = 0;
//   while (left < right) {
//     if (n[left] !== n[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(pali("abba"));

let string1 = "abba";
let right = string1.length - 1;
let left = 0;

while (left < right) {
  if (string1[left] != string1[right]) {
    console.log(false);
  } else {
    console.log(true);
  }
  right--;
  left++;
}

let kataS = "aba";
let result5 = "";
for (let i = kataS.length - 1; i >= 0; i--) {
  result5 += kataS[i];
}

if (kataS === result5) {
  console.log(kataS + " adalah palindrome");
} else {
  console.log(kataS + " bukan palindrome");
}

// 3
let cm = 100000;
let km = cm / 100000;

console.log(`jadi cm = ${km} km `);

function checkNum(a, b) {
  if (a === 100 || b === 100) {
    return true;
  } else if (a + b === 100) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNum(80, 20));

// function test(nama) {
//   let cariString = "ell";
//   let hasilCari = "";
//   let cek1 = "";
//     let testIndex = 0
//   for (let i = 0; i <= nama.length; i++) {
//     if (
//       cariString[0] === nama[i] &&
//       cariString[1] === nama[i + 1] &&
//       cariString[2] === nama[i + 2]
//     ) {
//       for (let k = i; k <= i + cariString.length; k++) {
//         return (testIndex += nama[k])

//       }
//       i = testIndex
//     } else {
//         return hasilCari += nama[i]
//     }
//   }
//   return hasilCari
// }

// console.log(test("hello world tell st cari dell"));

// console.log(hasilCari);

function tai(word) {
  let cariString = "ell";
  let hasilCari = "";

  for (let i = 0; i <= word.length; i++) {
    if (word[i] !== cariString) {
      hasilCari.concat(word[i]);
    } else {
      return 1;
    }
  }
  return hasilCari;
}

console.log(tai("Hello World Hello"));

let word = "hello world";
let words = "";

for (let i = 0; i <= word.length; i++) {
  // word[]
}

let text = "DIMAS";
let texts = "";

for (let i = text.length - 1; i >= 0; i--) {
  texts += text[i];
}

console.log(texts);

// reverse string
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("STRING"));

//Write a code to swap the case of each character from string

function swapCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  //   console.log(newStr);
  return newStr;
}

console.log(swapCase("Breaking Bad"));

function caseSwap(str) {
  let newsLetter = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newsLetter += str[i].toLowerCase();
    } else {
      newsLetter += str[i].toUpperCase();
    }
  }
  return newsLetter;
}

console.log(caseSwap("The QuiCk BrOwN Fox"));

function intergers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(intergers(100, 60));
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data

function komik(nums) {
  let hasil = "";

  if (typeof nums === "string") {
    return 1;
  } else if (typeof nums === "number") {
    return 2;
  } else {
    return 3;
  }
  // return hasil;
}
console.log(komik(true));

// let hasil1 = "";
// let inti1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let d = "abcdefghijklmnopqrstuvwxyz";

// let x = "x";
// switch (x) {
//   case x === String:
//     hasil1 = 1
//     break;
//   case d:
//     console.log(2);
//     break;
//   default:
//     console.log(3);
//     break;
// }

// console.log(hasil1);

// Write a conditional statement to sort three numbers
function sort(a, b, c) {
  if (a > b && b > c) {
    console.log(a, b, c);
  } else if (a > c && c > b) {
    console.log(a, c, b);
  } else if (b > a && a > c) {
    console.log(b, a, c);
  } else if (b > c && c > a) {
    console.log(b, c, a);
  } else if (c > a && a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

console.log(sort(5, 8, 20));

//Write a code to change every letter a into * from a string of input
function kata(word) {
  let letter = "a";
  let test = "*";
  let cek1 = "";
  let hasil = "";
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter[0]) {
      cek1 += test;
    } else {
      cek1 += word[i];
    }
  }
  return cek1;
}

console.log(kata("What a nice day"));

// Rupiah

let duit = 1000000;
let duitStr = duit.toString();
let hasil = "";

for (let i = 0; i <= duitStr.length; i++) {
  if (duitStr[i] / 3 === 3) {
    hasil = duitStr[i] + ".";
  }
}

console.log(hasil);
// console.log(duitStr);

let numberr = 100000;
let numberStr = numberr.toString();
let resultNum = "";
results = ""
let result6 = "";
let tests = 0




