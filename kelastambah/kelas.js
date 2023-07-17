let arr = [3, 0, 5, 6, 1, 2, 0, 0, 4, 5];

// function pushZero(arr) {
//   let result = [];
//   let result1 = [];
//   let hasil = []
//   for (let i in arr) {
//     if (arr[i] === 0) {
//       result = result.concat(arr[i]);
//     } else {
//         result1 = result1.concat(arr[i])
//     }
//   }
//   return hasil = arr.concat(result)
// // return result
// }

// console.log(pushZero(arr));

// function push_zero(arr) {
//   // Write your code here
//   let result1 = [];
//   let result2 = [];
//   let finalRes = [];
//   for (let i in arr.length) {
//     if (arr[i] === 0) {
//       result1 = result1.concat(arr[i]);
//     } else {
//       result2 = result2.concat(arr[i]);
//     }
//   }

//   return (finalRes = result2.concat(result1));
// }

// console.log(push_zero(arr));

// let road = "__o__xx__oo__xxx_x__o_ooo__";
// function jump_on_x(road) {
//   let arr = [];
//   let test = "";
//   // Write your code here
//   for (let i in road) {
//     if (road[i] === "x" || road[i + 1] === "xx" || road[i] === "xxx") {
//       for (let j = i; j <= i +road.length; j++) {
//         test += j;
//       }
//     }
//   }
//   return test;
// }

// console.log(jump_on_x(road));
// let road = "__o__xx__oo__xxx_x__o_ooo__";
// function jump_on_x(road) {
//   let arr = "";
//   let test = "";
//   // Write your code here
//   for (let i in road) {
//     if(road[i] === "xxx"){
//         test = road[i]
//         console.log(test);
//     }
//   }
//   return test;
// }

// console.log(jump_on_x(road));
let reportList = [10, 20, 30, 40];
function calculateNetWorth(reportList) {
  // Write your code here
  let hasilEven = 0;
  let hasilOdd = 0;
  let result = 0;
  for (let i in reportList) {
    // console.log(i);
    if (i % 2 === 0) {
      hasilEven = hasilEven + reportList[i];
    } else {
      hasilOdd = hasilOdd - reportList[i];
    }
    result = hasilEven + hasilOdd;
  }
  return result;
}

console.log(calculateNetWorth(reportList));

// function calculateNetWorth(reportList) {
//     // Write your code here
//      for(let i = 1; i <= reportList.length;i++){
//         let hasil = ""
//         if(reportList % 2 === 0) {
//             reportList += reportList[i]
//         }else {
//             reportList -=reportList[i]
//         }
//     }
//     return hasil =
// }

// console.log(calculateNetWorth(reportList));

// function jump_on_x(road) {
//   let result = "";
//   for (let i = 0; i <= road.length - 1; i++) {
//     let j = i + 1;
//     let jumpCount = 0;
//     while (j < road.length && road[j] === "x") {
//       jumpCount++;
//     }
//   }
//   return jumpCount;
// }
// console.log(jump_on_x(road));

// function jump_on_x(road) {
//   let jumpCount = 0;
//   let test = "";

//   for (let i = 0; i <= road.length; i++) {
//     if (road[i] === "x") {
//       tempx += road[i];
//       if (road[i] === "xxxx") {
//         break;
//       } else if (road[i + 1] !== "x") {
//         jumpCount++;
//         test = "";
//       }
//     }
//   }
//   return jumpCount;
// }
// console.log(jump_on_x(road));

let road = "__o__xxx__oo__xxxx_x__o_ooo__";
function jump_on_x(road) {
  let jumpCount = 0;
  let test = "";
  for (let i = 0; i < road.length; i++) {
    if (road[i] === "x") {
      test += road[i];
      if (test === "xxxx") {
        break;
      } else if (road[i + 1] != "x") {
        jumpCount++;
        test = "";
      }
    }
  }
  return jumpCount;
}
console.log(jump_on_x(road));

let arr1 = [156873294, 719583602, 581240736, 605827319, 895647130];
function miniMaxSum(arr) {
  // Write your code here
  let tempMin = [];
  let tempMax = [];
  let hasilMin = 0;
  let hasilMax = 0;
  for (let i in arr) {
    if (arr[i] === arr[0]) {
      tempMin += arr[i];
    } else {
      hasilMax += arr[i];
    }

    if (arr[i] === arr[4]) {
      tempMax = arr[i];
    } else {
      hasilMin += arr[i];
    }
  }
  return hasilMin + " " + hasilMax;
}

console.log(miniMaxSum(arr1));

// HOW MANY DUPLICATE
let candles = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25];
function birthdayCakeCandles(candles) {
  // Write your code here
  let arrSort = candles.sort(function (a, b) {
    return a - b;
  });

  let total = 0;
  let total1 = 0;
  for (let i = 0; i <= arrSort.length - 1; i++) {
    let tallest = arrSort[arrSort.length - 1];
    console.log(tallest);
    if (arrSort[i] <= tallest) {
      total1 = arrSort[i];

      if (arrSort[i] === tallest) {
        total++;
      }
    }
  }

  //   return tallest;
}
console.log(birthdayCakeCandles(candles));

let arrs = [-4, 3, -9, 0, 4, 1];

function plusMinus(arrs) {
  // Write your code here

  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] === 3) {
      console.log(arrs[i] / arrs.length);
    }
    if (arrs[i] === 1) {
      console.log(arrs[i] / arrs.length);
    }
    if (arrs[i] === 4) {
      console.log((arrs[i] - 2) / arrs.length);
    }
  }
}

console.log(plusMinus(arrs));

let a = 1.2;
console.log(a.toFixed(6));

// let result1 = 0;
// let result2 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//       return (arr[i] - 2) / arr.length;
//     } else if (arr[i] > 0) {
//         return  arr[i] / arr.length;
//     }

//
// let numberList = ["11", "20", "33", "0", "55"];

// function processData(numberList) {
//   // Write your code here
//   let outputNilai = [];
//   let output = [];
//   let sum = 0;
//   for (let i = 1; i <= numberList.length; i++) {
//     if (i === 1) {
//       output.push(parseInt(numberList[i]));
//     }
//     if (i === 2) {
//       sum = parseInt(numberList[0]) + parseInt(numberList[2]);
//       output.push(sum);
//       sum = 0;
//     }

//     if (i === 3) {
//       sum = parseInt(numberList[1]) + parseInt(numberList[3]);
//       output.push(sum);
//       sum = 0;
//     }
//     if (i === 4) {
//       sum = parseInt(numberList[2]) + parseInt(numberList[4]);
//       output.push(sum);
//       sum = 0;
//     }
//     if (i === 5) {
//       sum = parseInt(numberList[3]) + 0;
//       console.log(sum);
//       output.push(sum);
//       sum = 0;
//     }else {
// for (let m = 0; m <= numberList.length; m++) {
//     if (typeof numberList[m] !== "string") {
//       output = [];
//       break;
//     }
//   }
//   for (let k = 0; k <= numberList.length - 1; k++) {
//     console.log(numberList[k]);
//     if (isNaN(output[k])) {
//       output = [];
//       break;
//     }
//   }
//   for (let j = 0; j <= numberList.length; j++) {
//     if (parseInt(numberList[j] === 1) || numberList[j] === " ") {
//       output = [];
//       break;
//     }
//   }
//     }
//   }

//   return output;
// }

// console.log(processData(numberList));

// if (i === 1) {
//     output.push(parseInt(numberList[i]));
// }else if (i === 2) {
//   sum = parseInt(numberList[0]) + parseInt(numberList[2]);
//   output.push(sum);
//   sum = 0;
// }else if (i === 3) {
//   sum = parseInt(numberList[1]) + parseInt(numberList[3]);
//   output.push(sum);
//   sum = 0;
// }else if (i === 4) {
//   sum = parseInt(numberList[2]) + parseInt(numberList[4]);
//   output.push(sum);
//   sum = 0;
// } else if (i === 5) {
//   sum = parseInt(numberList[3]) + 0;
//   output.push(sum);
//   sum = 0;
// }
let numberList = ["11", "20", "33", "0", "55"]; //20, 44, 20, 88, 0]
let numberList1 = ["100", "5", "71", "hello", "1"]; //[]
let numberList2 = ["", " ", "", " ", ""]; // []
let numberList3 = ["10"]; //[0]
let numberList4 = [10, "15", [2]]; //[]
let numberList5 = ["90", "80", "1b2", "17", "25"]; //[]

function processData(numberList) {
  // Write your code here
  let output = [];
  let sum = 0;
  
  for (let i = 1; i <= numberList.length; i++) {
    if (numberList[i] === numberList[1]) {
      output.push(parseInt(numberList[1]));
      sum = 0;
    } else if (numberList[i]) {
      sum = parseInt(numberList[i]) + parseInt(numberList[i - 2]);
      output.push(sum);
      sum = 0;
    } else {
      output.push(parseInt(numberList[i - 2]));
    }
  }
  if (numberList.length == 1) {
    output = [0];
  }
  for (let k = 0; k < output.length; k++) {
    if (isNaN(output[k])) {
      return (output = []);
      break;
    }
  }
  for (let j = 0; j < numberList.length; j++) {
    if (typeof numberList[j] != "string" && typeof numberList[j] != "number") {
      output = [];
      break;
    }
  }

  for (let t = 0; t <= numberList.length; t++) {
    if (parseInt(numberList[t]) == 1) {
      output = [];
      break;
    }
  }

  return output;
}

// console.log(processData(numberList));
// console.log(processData(numberList1));
// console.log(processData(numberList2));
console.log(processData(numberList3));
// console.log(processData(numberList4));
// console.log(processData(numberList5));

// input = ["100", "5", "71", "hello", "1"] output = false

// input = ["90", "80", "1b2", "17", "25"] output = []

// input = ["10"] output = [0]

// input = ["", " ", "", " ", ""] output = []
