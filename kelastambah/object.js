// create objext with function declaration
function test() {
  var msh = {
    nama: "Rafansa Oktaviano",
    age: 18,
    Zodiac: "Libra",
  };
  return msh;
}

console.log(test());

// Create Object with function constructor

function Declar() {
  this.name = "Rafansa Oktaviano";
  this.age = 18;
  this.zodiac = "Libra";
}

const testDeclar = new Declar();

console.log(testDeclar);

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot kosong");
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Sandhika Galih", ["Bandung", "Cimahi"], [], 0);
var angkot1 = new Angkot("Rafansa Oktaviano", ["Ciroyom", "Leuwigajah"], [], 0);

console.log(angkot1.penumpangNaik("raf"));
console.log(angkot1.penumpangNaik("tes"));
console.log(angkot1.penumpangTurun("raf", 2500));
console.log(angkot1);

// obj literal
// let mahasiswa = {
//   nama: "Sandhika",
//   energy: 10,

//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//   },

// };
// console.log(mahasiswa);
// console.log(mahasiswa.makan(2));
// console.log(mahasiswa.energy);

// function Declaration

function Declar2(name, energy) {
  this.name = name;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
  };

  this.main = function (game) {
    this.energy -= game;
  };

  this.tidur = function (sleep) {
    this.energy += sleep * 2;
  };
}

function Mahasiswa(name, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.name = name;
  mahasiswa.energy = energy;
  mahasiswa.tidur = tidur;
  mahasiswa.main = main;
  return mahasiswa
}
let sandhika = new Declar2("Rafansa", 20);

console.log(sandhika);
console.log(sandhika.tidur(10));
console.log(sandhika);
console.log(sandhika.tidur(50));
console.log(sandhika.main(50));
console.log(sandhika);

// Create an object using the prototype
// Create a prototype object

// function Mahasiswa(name, energy) {
//   // let mahasiswa = Object.create(methodMahasiswa);
//   // let this = {}
//   this.name = name;
//   this.energy = energy;
//   //   this.tidur = tidur;
//   //   this.main = main;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return this.energy;
// };
// Mahasiswa.prototype.tidur = function (sleep) {
//   this.energy += sleep * 2;
//   return this.energy;
// };
// Mahasiswa.prototype.main = function (game) {
//   this.energy -= game;
//   return this.energy;
// };

// let sandhika = new Mahasiswa("Sandhika", 10);

// console.log(sandhika);
// console.log(sandhika.makan(3));
// console.log(sandhika.main(3));
// console.log(sandhika.tidur(3));

//VERSI CLASS

class Mahasiswa1 {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return this.energy;
  }
  tidur(sleep) {
    this.energy += sleep * 2;
    return this.energy;
  }
  main(game) {
    this.energy -= game;
    return this.energy;
  }
}

let sandhika = new Mahasiswa1("Rafansa", 10);
console.log(sandhika);
console.log(sandhika.tidur(10));
