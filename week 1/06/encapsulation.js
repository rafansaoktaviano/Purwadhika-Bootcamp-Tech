class Employee {
  constructor() {
    this.name;
    this.test;
  }

  setName(name, test) {
    name ? (this.name = name) : (this.name = "John Doe");
    name ? (this.test = test) : (this.test = "John Doe");
  }

  getName() {
    return this.name;
  }
  getName() {
    return this.test;
  }
}

var dimas = new Employee();
dimas.setName();
dimas.setName("wqeq", "test1");

console.log(dimas);

class Product {
  constructor() {
    this.productName;
    this.price;
  }

  setName(productName) {
    this.productName = productName;
  }
  getName() {
    return productName;
  }
  setAuthor() {
    this.productName = productName;
  }
}

class Book extends Product {
  constructor() {
    super();
    this.author;
  }
  setAuthor(author) {
    this.author = author;
  }
  getAuthor() {
    return author;
  }
}

const ebook1 = new Book();
ebook1.setName("kamus b inggris");
ebook1.setAuthor("epan");
console.log(ebook1);
let arr = [1, 2, 3, -1, -2, -3, 0, 0];
let pos = 0;
let nav = 0;
let zero = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    pos++;
  } else if (arr[i] < 0) {
    nav++;
  } else {
    zero++;
    console.log(zero);

  }
}
console.log((pos / arr.length).toFixed);
console.log((nav / arr.length).toFixed(6));
console.log((zero / arr.length).toFixed(6));
