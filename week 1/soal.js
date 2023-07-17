class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
class Rabbit extends Animal {
  eat() {
    if (this.isMammal === true) {
      return `${this.name} sedang makan`;
    }
  }
}
class Eagle extends Animal {
  fly() {
    if (this.isMammal === true) {
      return `${this.name} sedang terbang`;
    } else {
        return "Elo sudah kenyang"
    }
  }
}

const myRabbit = new Rabbit("Labi", 2,true);
const myEagle = new Eagle("Elo", 4,false);
const Animals = [myRabbit, myEagle];
myRabbit.eat();
myEagle.fly();
console.log(Animals);
console.log({Rabbit:myRabbit.eat(), Eagle:myEagle.fly()});




