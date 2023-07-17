class Employee{

}

class Manager extends Employee{

}

const budi = new Employee()
const eko = new Manager()

console.log(typeof budi);
console.log(typeof eko);

console.log(budi instanceof Employee); 
console.log(budi instanceof Manager); 
console.log(eko instanceof Manager); 
console.log(eko instanceof Manager); 