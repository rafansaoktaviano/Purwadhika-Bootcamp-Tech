class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const result = value.split(" ")
    this.firstName = result[0]
    this.lastName = result[1]
  }
}


const eko = new Person("Eko", "Epan")
console.log(eko);
console.log(eko.fullName);

eko.fullName = "Budi Nugraha"
console.log(eko.fullName);