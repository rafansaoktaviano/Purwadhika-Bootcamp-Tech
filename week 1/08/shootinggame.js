class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    let items = ["health", "power"];
    let rand = Math.floor(Math.random() * 2);
    let item = items[rand];

    let items2 = [0, 10];
    let rand2 = Math.floor(Math.random() * 2);
    let item2 = items2[rand2];

    return { [item]: item2 };
  }

  start() {
    var isDead = false;
    while (!isDead) {
      this.player1.showStatus();
      this.player2.showStatus();

      this.player1.useItem(this.getRandomItem);
      this.player2.useItem(this.getRandomItem);

      this.player1.hit(this.player2.power)
      this.player2.hit(this.player1.power)

      this.player1.showStatus();
      this.player2.showStatus();

      if (this.player1.health <= 0 || this.player2.health <= 0) {
        isDead = true;
      }
    }
    if(this.player1.health > 0) {
        console.log(this.player1.name, + "is the WINNER");
    }else {
        console.log(this.player2.name, + "is the WINNER");
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }
  useItem(item) {
    for (let i in item) {
      if (i === "healt") {
        this.health += item[i];
      } else {
        this.power;
      }
    }
  }

  showStatus() {
    return this;
  }
}



let player1 = new player("epan")

let player2 = new player("rafansa")
let arena = new ShootingGame(player1,player2);
console.log(arena.getRandomItem());
