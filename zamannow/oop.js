// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.sayHello = function (name) {
//     console.log(`hello ${name}, my name is ${this.firstName}`);
//   };
// }
// const eko = new Person("Eko", "Khannedy");
// const budi = new Person("Budi", "Nugraha");

// console.log(eko); 
// console.log(budi);





class Person {
    constructor(name) {
        this.name = name
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
} 
const eko = new Person ("Eko")
eko.sayHello("Joko")