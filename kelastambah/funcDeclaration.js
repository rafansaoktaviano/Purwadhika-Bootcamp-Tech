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
  console.log(sandhika.tidur(20));
  console.log(sandhika.main(50));
  console.log(sandhika);