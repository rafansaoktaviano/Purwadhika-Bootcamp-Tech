class Employee {
    constructor (name) {
        this.name = name
    }
    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}
class Manager extends Employee {
    constructor (name) {
        super()
        this.name = name
    }
    sayHello(name) {
        console.log(`Hello ${name}, my name is manager ${this.name}`);
    }
}

const budi = new Employee()
budi.name = "Budi"
budi.sayHello("joko")

const eko = new Manager()
eko.name = "eko"
eko.sayHello("joko")

