function pascal(n) {
  let posisiAwal = [1, 1];
  let nilaiAwal = [1];
  let nilaiAkhir = [];
  // 0 1 2 3 4
  for (let i = 0; i < posisiAwal.length; i++) {
    if (n === 2) {
     nilaiAwal.push(posisiAwal);
    } else if (i === 1) {
      nilaiAkhir.push();
      break
    }
  }
  return nilaiAwal;
}

console.log(pascal(2));
``