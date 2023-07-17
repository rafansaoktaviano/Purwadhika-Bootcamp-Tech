// function romawiCase(output) {
//   let romawi = ["I", "V", "X", "C", "M"];
//   let result = [1, 5, 10, 100, 1000];
//   let res = 0;
//   for (let i = 0; i < romawi.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//       if (output === romawi[i]) {
//         res += (romawi[i] =  result[j])
//         break
//       }
//     }
//   }
//   return res
// }

// console.log(romawiCase("I"));

function romawiCase(output) {
  let romawi = ["I", "V", "X", "L", "C", "M"];
  let result = [1, 5, 10, 50, 100, 1000];
  let res = [];
  let hasil = 0;

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < romawi.length; j++) {
      if (romawi[j] === output[i]) {
        res.push(result[j]);
      }
    }
  }
  console.log(res);
  for (let t = 0; t < res.length; t++) {
    if (output.length === 1) {
      hasil += res[t];
    } else if (res[t] > res[t + 1]) {
      hasil += res[t] + res[t + 1];
      t = t + 1;
    } else if (res[t] < res[t + 1]) {
      hasil += res[t + 1] - res[t];
      t = t + 1;
    } else if (res[t] > res[t + 2]) {
      hasil += res[t] + res[t + 2];
      t = t + 2;
    } else if (res[t] === res[t + 1] && res[t] < res[t + 2]) {
      hasil = hasil + (res[t + 2] - res[t + 1] + res[t]);
    } else {
      hasil += res[t];
    }
  }

  return hasil;
}

console.log(romawiCase("CXC"));
