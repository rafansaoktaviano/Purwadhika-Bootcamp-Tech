// // CALLBACK

// function halo(nama) {
//      console.log(`halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = console.log(`masukkan nama :`);
//     callback(nama)
// }

// tampilkanPesan(halo)

const mhs = [
  {
    nama: "Rafansa Oktaviano",
    nrp: "12313421",
    email: "ravansaoktaviano@gmail.com",
    jurusan: "Sistem Informatika",
  },
  {
    nama: "Fladio Armandika",
    nrp: "121313",
    email: "fladio@gmail.com",
    jurusan: "Sistem Informatika",
  },
  {
    nama: "Anggoro Oktaviano",
    nrp: "12313421",
    email: "anggoro@gmail.com",
    jurusan: "Sistem Informatika",
  },
  {
    nama: "charaka Oktaviano",
    nrp: "123146234",
    email: "charaka@gmail.com",
    jurusan: "Sistem Informatika",
  },
];

// mhs.forEach(m => console.log(m.nama))

//Asynchronus Callback

// promises

let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve("Janji telah di tepati")
//     } else {
//         reject("Ingkar Janji")
//     }
// });

// console.log(janji1);
// janji1
//     .then(response => console.log("OK :" + response))
//     .catch(response => console.log("NOT OK : "  + response))

const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("ditepati");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak di tepati setelah bbrpa waktu");
    }, 2000);
  }
});

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)))
// janji2
//   .finally((response) => console.log("SELAMAT TELAH MENUNGGU"))
//   .then((response) => console.log("OK :" + response))
//   .catch((response) => console.log("NOT OK : " + response));
// console.log("selesai");

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Rafansa Oktaviano",
        pemeran: "Rafansa, Oktaviano",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  },500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));


Promise.all([film,cuaca])
    // .then(response => console.log(response))

    .then(response => {
        const [film,cuaca] = response 
        console.log(film);
        console.log(cuaca);
    })