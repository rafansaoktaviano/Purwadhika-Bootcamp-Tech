function number(num) {
  let tampungNilai = num[0];
  for (let i = 1; i < num.length; i++) {
    if (tampungNilai < num[i]) {
      return tampungNilai;
    } else {
      tampungNilai = num[i];
    }
  }
  return tampungNilai;
}

console.log(number([500, 100, 50, 150]));

// 1

function triangle(num) {
  let test = "";
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      test += j + counter + " ";
      counter++;
    }
    test += "\n";
  }
  return test;
}


console.log(triangle(5));

// 1Create a function that can create a triangle pattern according to the height we provide like the following :
function soal1(num) {
  let angka = 1;
  let hasil = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (angka < 10) {
        hasil += "0" + angka + " ";
        angka++;
      } else {
        hasil += angka + " ";
        angka++;
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(soal1(5));

//2 FIZZBUZZ

function fizzBuzz(num1) {
  let angka = "";
  for (let i = 1; i <= num1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }

    // console.log(angka);
  }
  // return angka;
}
fizzBuzz(20);

// //3 Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 1ÿ.5 return “less weight”
// ○ 1ÿ.5 - 24.Ā return “ideal”
// ○ 25.0 - 2Ā.Ā return “overweight”
// ○ 30.0 - 3Ā.Ā return “very overweight”
// ○ > 3Ā.Ā return “obesity”

function body(weight, height) {
  let BMI = weight / (height * height);
  console.log(BMI);
  let hasil = "";
  if (BMI < 18.5) {
    return (hasil = "less weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return (hasil = "ideal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    return (hasil = "overweight");
  } else if (BMI >= 30 && BMI <= 39.9) {
    return (hasil = "very overweight");
  } else {
    return (hasil = "OBESITAS!!!");
  }
}
console.log(body(80, 1.75));

//4 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function rmv(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      array.push(i);
      console.log(i);
    }
  }
  return array;
}

console.log(rmv(10));

//5  Write a function to split a string and convert it into an array of words

function split(word) {
  let array = [];
  let str = "";
  for (let i = 0; i <= word.length; i++) {
    str += word[i];
    if (word[i] === " ") {
      array.push(str);
      str = "";
    } else if (i === word.length - 1) {
      array.push(str);
    }
  }
  return array;
}

console.log(split("hello world"));
