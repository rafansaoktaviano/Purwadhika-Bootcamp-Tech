//1 Write a function to get the lowest, highest and average value in the array (with and without sort function).
let num = [70, 10, 5, 30];

// function array2(num) {
//   let arrSort = num.sort(function (a, b) {
//     return a - b;
//   });
//   return arrSort;
// }
//min
function min(num) {
  let min = num[0];
  let max = num[0];
  let hasil = "";
  for (let i = 1; i <= num.length; i++) {
    if (num[i] < min) {
      min = num[i];
    }
    if (num[i] >= max) {
      max = num[i];
    }
  }
  return `${min} adalah min dan ${max} adalah max`;
}

//max
// function max(num) {
//   let max = num[0];
//   let hasil = "";
//   for (let i = 0; i <= num.length; i++) {
//     // console.log(num[i]);
//     //
//     if (num[i] >= max) {
//       hasil = num[i];
//     }
//   }
//   return hasil + " max";
// }
//avg
function avg(num) {
  let avg = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    avg += num[i];
  }
  return avg / num.length;
}

// console.log(array2(num));
console.log(min(num));
// console.log(max(num));
console.log(avg(num));

// 2 Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

let words = ["dimas", "ady", "franky"];
function string(words) {
  let str = "";
  for (let i in words) {
    if (i < words.length - 1) {
      str += words[i] + ",";
    } else {
      str += " and " + words[i];
    }
  }
  return str;
}

console.log(string(words));

// 3 Write a function to split a string and convert it into an array of words
function array(kata) {
  let hasil = [];
  let temp = "";

  for (let i = 0; i <= kata.length; i++) {
    if (kata[i] === " ") {
      hasil.push(temp);
      temp = "";
    } else if (i === kata.length) {
      hasil.push(temp);
      temp = "";
    } else {
      temp += kata[i];
    }
  }
  return hasil;
}

console.log(array("Hello World"));

//4 Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

function arr(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    resultArr[i] = arr1[i] + arr2[i];
  }
  return resultArr;
}

console.log(arr(arr1, arr2));

//5 Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array

function addEle(arr, element) {
  let result = arr;
  for (let x in arr) {
    if (element !== arr[x]) {
      result.push(element);
      break;
    }
  }
  return result;
}

console.log(addEle(["Riyadi", "Guntur", "Amrijal"], "Riyadi"));

//6 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function number(arr) {
  let array = [];
  let temp = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      array.push(arr[i]);
    } else {
      // temp.push(arr[i])
    }
  }
  return array;
}

console.log(number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 7 Write a function to insert multiple given integer (not an array) to an array and have a maximum sizeinput. The array can only have a maximum size from a given input. (if the maximum size of the giveninput is 5 than the array can only contain 5 elements).
let maxSize = [];

function array70(maxSize, ...theArgs) {
  for (let i = 0; i <= theArgs.length - 1; i++) {
    if (theArgs[i] <= theArgs[4]) {
      maxSize.push(theArgs[i]);
    }
  }
  return maxSize;
}

console.log(array70(maxSize, 10, 20, 30, 40, 50, 60, 70, 80));

// 8 Write a function that will combine 2 given array into one array
let arrayGiven = ["epan", "charaka", "purwadhika", "haekal"];
let arrayGiven2 = ["anggoro", 10, 20, true];
function combine(arrayGiven, arrayGiven2) {
  let result = arrayGiven.concat(arrayGiven2);

  return result;
}

console.log(combine(arrayGiven, arrayGiven2));

// 9 Write a function to find duplicate values in an array
let arrDupli = [10, 20, 50, 10, 70, 90, 50, 20];
function duplicate(arrDupli) {
  let result = [];
  let tampungan = 0;
  let occurance = true;
  for (let i = 0; i <= arrDupli.length; i++) {
    for (let j = i + 1; j <= arrDupli.length; j++)
      if (arrDupli[i] === arrDupli[j] && occurance) {
        result.push(arrDupli[i]);
        break;
      }
    // occurance = false;
  }
  return result;
}
console.log(duplicate(arrDupli));

// 10
let array1 = [10, 1, 3, 4, 5, 6, 7]; // diff 2 4 5 7
let array4 = [2, 1, 6, 3, 7];
function diff(array1, array4) {
  let diffArr = [];
  let tampung = [];
  let isDiff = true;
  for (let i = 0; i <= array1.length - 1; i++) {
    for (let j = i; j <= array4.length - 1; j++) {
      // console.log(array4[i]);
      if (array1[i] === array4[j]) {
        isDiff = false;
        break;
      }
    }

    if (isDiff === true) {
      diffArr.push(array1[i]);
    }
    isDiff = true;
  }
  return diffArr;
}

console.log(diff(array1, array4));

//11  Based on the array above write a function that will return primitive data types only
let dataArr = [
  1,
  "string",
  ["tes"],
  null,
  false,
  undefined,
  2,
  "yes",
  undefined,
  ["epan"],
];
function primitive(dataArr) {
  let tampung = [];
  let str = [];
  for (let i in dataArr) {
    if (typeof dataArr[i] !== "object" || dataArr[i] == null) {
      str.push(dataArr[i]);
    } else {
      continue;
    }
  }
  return str;
}

console.log(primitive(dataArr));

//12 Write a function from a given array of numbers and return the second smallest number

function secSmallest(num) {
  let secondSmallest = [];
  let secSmal = num[1];
  for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] < secSmal) {
      secondSmallest = num[i];
    }
  }
  return secondSmallest;
}
console.log("ini no 12");
console.log(secSmallest(num));

//13  Write a function from a given array of mixed data types and return the sum of all the number
let sumArr = [10, 20, undefined, 40, null, "10", "50", 30, 10, "60", "10"];

function summArr(sumArr) {
  let sumArray = 0;
  for (let i in sumArr) {
    if (typeof sumArr[i] === "number") {
      sumArray += sumArr[i];
    }
  }
  return sumArray;
}

console.log(summArr(sumArr));

//14 Write a function from the above array of number that will return sum of duplicate values
let dupli = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDupli(dupli) {
  dupliArr = [];
  notDupli = [];
  for (let i in dupli) {
    if (dupli[i] === dupli[i]) {
      dupliArr.push(dupli[i]);
    } else {
      notDupli.push(dupli[i]);
    }
  }

  return dupliArr;
}

console.log(sumDupli(dupli));

// 15
let choices = ["batu", "gunting", "kertas"];
function getRandomItem(choices) {
  let getRandomIndex = Math.floor(Math.random() * choices.length);
  const item = choices[getRandomIndex];
  return item;
}

let result = getRandomItem(choices);

function games(choices, user) {
  let hasil = "";
  if (user === "batu") {
    if (choices === "batu") {
      hasil = "DRAW";
    } else if (choices === "gunting") {
      hasil = "YOU WIN !!!";
    } else if (choices === "kertas") {
      hasil = "YOU LOSE!!!";
    }
  } else if (user === "gunting") {
    if (choices === "gunting") {
      hasil = "DRAW";
    } else if (choices === "batu") {
      hasil = "YOU LOSE!!!";
    } else if (choices === "kertas") {
      hasil = "YOU WIN!!!";
    }
  } else if (user === "kertas") {
    if (choices === "kertas") {
      hasil = "DRAW";
    } else if (choices === "batu") {
      hasil = "YOU WIN!!!";
    } else if (choices === "gunting") {
      hasil = "YOU LOSE!!!";
    }
  }

  return `user = ${user} dan comp ${choices} ==> ${hasil}`;
}

console.log(games(result, "gunting"));



let car = {
  nama: "rafansa",
  carr : {
    brand : "Mercedes",
    price : 1_000_000_000
  }

}


console.log(car["carr"]["price"]);