// EXERCISE 1
let celcius = 26;
let fahrenheit = 9 / 5;
let result = celcius * fahrenheit + 32;
console.log(result + "Fahrenheit");

// EXERCISE 2

for (let i = 1; i <= 20; i += 2) {
  console.log("odd numbers is " + i);
}
for (let i = 0; i <= 20; i += 2) {
  console.log("even numbers is " + i);
}

// EXERCISE 3

let nilai1 = 20;
let result1 = 0;

// for(let i = 1; i <= nilai1; i++){
//     if(nilai1 % i ){
//         console.log(i % );
//     }
// }

//EXERCISE 4
let nilai4 = 14;
let result4 = 0;
for (let i = 1; i <= nilai4; i++) {
  result4 += i;
}
console.log(result4);

//EXERCISE FAKTORIAL

let nilai5 = 5;
let hasilFaktor = 1;
for (let i = nilai5; i > 0; i--) {
  hasilFaktor *= i;
}
console.log(hasilFaktor);

//EXERCISE FIBONACI

let firstNumber = 0;
let secondNumber = 1;
let resultTemp = 0;
let resultFib = "0+1";

for (let i = 2; i <= 10; i++) {
  resultTemp = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = resultTemp;
  resultFib += "+" + resultTemp;
}

console.log(resultFib);

//EXERCISE

let names = "DIMAS";
let aman = " ";
for (let i = names.length - 1; i >= 0; i--) {
  aman = aman + names[i];
}
console.log(aman);

const b = 9;
const c = 10;

for (let i = 1; i <= c; i++) {
  resultb = b * i;
  console.log(b * i);
}

let tes = "";
for (let i = 0; i < 5; i++) {
  for (let k = 0; k <= i; k++) {
    tes += "* ";
  }
  tes += "\n";
}
console.log(tes);

let tess = "";
for (let i = 5; i >= 0; i--) {
  for (let k = 0; k < i; k++) {
    tess += "* ";
  }
  tess += "\n";
}

console.log(tess);

let balik = "";
for (let i = 5; i >= 0; i--) {
  for (let k = 0; k < i; k++) {
    balik += "* ";
  }
  balik += "\n";
}
console.log(balik);

// exercise

function even(input) {
  if (input % 2 == 1) {
    return "the input is even";
  } else {
    return "the input is odd";
  }
}

console.log(even(11));

// exerciseee Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

function findSum() {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(findSum());

// Write a code to find factorial of a number.

function faktor(nilaifaktor) {
  let faktor = 1;
  for (let i = 1; i <= nilaifaktor; i++) {
    faktor *= i;
  }
  return faktor;
}

console.log(faktor(5));

// SWAP TWO NUMBERS WITHOUT USING 3rd Variables
// a = a + b
// b = a - b
// a = a - b

let number1 = 5;
let number2 = 10;

number1 = number1 + number2; // 5 + 10  = 15
number2 = number1 - number2; // 15 - 10 = 5
number1 = number1 - number2; //15 - 5 = 10

console.log(number1);
console.log(number2);

// EXERCISE FIZZBUZZ

let inputt = 20;
for (let i = 1; i <= inputt; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

//MAKE FIRST LETTER UPPER CASE
let a = "Jonny";
console.log(a.charAt(0) + a.slice(1));

//Pattern STAR
let star1 = 5;
let star2 = "";

for (let i = 1; i <= star1; i++) {
  for (let k = 0; k <= star1 - i; k++) {
    star2 += "* ";
  }
  star2 += "\n";
}

console.log(star2);

let star3 = 5;
let star4 = "";

for (let i = 1; i <= 5; i++) {
  for (let k = 0; k <= i - 1; k++) {
    star4 += "*";
    if (i <= k) {
      star4 += "*";
    } else {
      star4 += " ";
    }
  }
  star4 += "\n";
}

console.log(star4);

// EXERCISE PATTERN
//1

function pattern1(n1) {
  let kata1 = "";
  for (let i = 1; i <= n1; i++) {
    for (let k = 1; k <= n1; k++) {
      kata1 += "* ";
    }
    kata1 += "\n";
  }

  return kata1;
}
console.log(pattern1(5));

// 2

function pattern2(n2) {
  let kata2 = "";
  for (let row = 1; row <= n2; row++) {
    for (let col = 1; col <= row; col++) {
      kata2 += "* ";
    }
    kata2 += "\n";
  }
  return kata2;
}

console.log(pattern2(5));

// 3

function pattern3(n3) {
  let kata3 = "";
  for (let i = 1; i <= n3; i++) {
    for (let k = n3; k >= i; k--) {
      kata3 += "* ";
    }
    kata3 += "\n";
  }
  return kata3;
}
console.log(pattern3(5));

// 4

let number4 = 5;
let kata4 = "";

for (let i = 1; i <= number4; i++) {
  for (let k = 1; k <= i; k++) {
    kata4 += k;
  }
  kata4 += "\n";
}
console.log(kata4);

//5
let number5 = 5;
let kata5 = "";

for (let i = 0; i <= 2 * number5; i++) {
  let totalCols = i > number5 ? 2 * number5 - i : i;
  for (let k = 1; k <= totalCols; k++) {
    kata5 += "* ";
  }
  kata5 += "\n";
}

console.log(kata5);

// 6

let number6 = 5;
let kata6 = "";

for (let i = 0; i <= 2 * number6; i++) {
  let totalsCols6 = i > number5 ? 2 * number5 - i : i;
  let noOfSpaces = number6 - totalsCols6;
  for (let s = 0; s <= noOfSpaces; s++) {
    kata6 += " ";
  }
  for (let k = 0; k <= totalsCols6; k++) {
    kata6 += "* ";
  }
  kata6 += "\n";
}

console.log(kata6);

// PYRAMID

let number7 = 5;
let kata7 = "";

for (let i = 1; i <= number7; i++) {
  for (let j = number7; j >= 1; j--) {
    if (i >= j) {
      kata7 += "*";
    } else {
      kata7 += " ";
    }
  }
  kata7 += "\n";
}

console.log(kata7);

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// PRIME NUMBER

function prime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return (isPrime = false);
    }
  }
  return isPrime;
}

console.log(prime(11));


let numberrr = 5
let stringsss = ""

for(let i = 1 ; i <= numberrr; i++){
  for(let k = 1;k <= i; k++) {
    stringsss += "* "
  }
  stringsss += "\n"
}

console.log(stringsss);



let tests = 5 
let testing = ""

for (let i = 1; i <= tests; i++){
  for(let k = tests; k >= i; k--){
    testing += "* "
  }
  testing += "\n"
}
console.log(testing);