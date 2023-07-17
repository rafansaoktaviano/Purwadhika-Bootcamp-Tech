function hitungDataSiswa(siswa) {
    let scores = siswa.map((siswa) => siswa.Score);
    let umur = siswa.map((siswa) => siswa.Umur);
//   console.log(scores);
//   console.log(ages);
    let dataScore = {
      Highest: Math.max(...scores),
      Lowest: Math.min(...scores),
      scores: scores.reduce((a, b)=>a+b)/scores.length};
  
    let dataUmur = {
      Highest: Math.max(...umur),
      Lowest: Math.min(...umur),
      Average: umur.reduce((acc, age) => acc + age, 0) / siswa.length
    };
  
    return {
      Score: dataScore,
      Umur: dataUmur,
    };
  }
  const siswa = [
    {
      Nama: "caraka",
      Email: "caraka@gmail.com",
      Umur: 20,
      Score: 85,
    },
    {
      Nama: "raf",
      Email: "raf@gmail.com",
      Umur: 21,
      Score: 90,
    },
    {
      Nama: "haekal",
      Email: "haekal@gmail.com",
      Umur: 25,
      Score: 80,
    },
    {
        Nama: "wijaya",
        Email: "wijaya@gmail.com",
        Umur: 19,
        Score: 99,
    }
  ];
  
  const dataSiswa = hitungDataSiswa(siswa);
  console.log(dataSiswa);