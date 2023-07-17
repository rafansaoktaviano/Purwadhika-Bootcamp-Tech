class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName;
    }
  }
  #sayWithoutName() {
    console.log("Hello");
  }
  #sayWithName() {
    console.log(`hello ${name}`);
  }
}

const budi = new Person();
budi.say();
