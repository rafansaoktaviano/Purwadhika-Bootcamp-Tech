function specialGreeter(name) {
  console.log("Hey " + name + "! You are cool ");
}

specialGreeter("John");

function adder(a, b, c, d) {
  console.log(a + b + c + d);
}

adder(2, 2, 2, 3);

function printerArray(mango) {
  for (let i = 0; i <= mango.length - 1; i++) {
    console.log(mango[i]);
  }
}

printerArray(["Cat", "Camel", "Racoon"]);

console.log();

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 4));

function doesExist(nums, num) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === num) {
      return true;
    }
  }
  return false
}

doesExist([1, 3, 5, 7], 1);


  let names = "world";
  let name = " ";
  for (let i = names.length - 1; i >= 0; i--) {
    name = name + names[i];
  }


  console.log(name);




  var myArr = [1,2,3,5,8,13]
// looping through the array
// to get the Fibonacci numbers
for(let i =0; i < myArr; i++){
    console.log(myArr)
}

// prints out 1, 2, 3, 5, 8, 13