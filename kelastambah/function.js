function test(name) {
  // FUNCTION DECLARATION
  console.log("asd");
}
const test2 = function () {
  // FUNCTION EXPRESION
  this.name = "Raf";
};
test();
console.log(test()); // undefined if there's no return

console.log(test); // check if this is a function

const t2 = new test2();

console.log(t2);
function cube(n) {
  let temp = "";
  for (let i = 0; i < n; i++) {//ROW
    for (let j = 0; j < n; j++) {// COLLUMN
      temp += "x";
    }
    temp += "\n";
  }
  console.log(temp); 
}
console.log(cube(3));

// tipe data string dan array memiliki length
