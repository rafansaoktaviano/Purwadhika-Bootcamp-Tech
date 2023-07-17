class Shape {
   
    sayHello() {
        console.log("Paint Shape");
    }
}
class Circle extends Shape {
    paint() {
        super.sayHello()
        console.log("Paint Circle");
    }
}


const circle = new Circle()
circle.paint()


// const budi = new Employee()
// budi.name = "Budi"
// budi.sayHello("joko")

// const eko = new Manager()
// eko.name = "eko"
// eko.sayHello("joko")

