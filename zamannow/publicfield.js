class Customer {
  firstName;
  lastName;
  balance = 0;
  constructor(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}


const eko = new Customer()
console.log(eko);