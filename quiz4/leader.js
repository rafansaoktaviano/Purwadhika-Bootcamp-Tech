function climbingLeaderboard(ranked, player) {
  let result = [];
  for (let z = 0; z < player.length; z++) {
    let noneDouble = [];
    let nilai = ranked;

    nilai.push(player[z]);

    for (let i = 0; i < nilai.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < noneDouble.length; j++) {
        if (nilai[i] === noneDouble[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (isDuplicate === false) {
        noneDouble.push(nilai[i]);
      }
    }

   

    for (let k = 0; k < noneDouble.length - 1; k++) {
      for (let l = 0; l < noneDouble.length - 1 - k; l++) {
        if (noneDouble[l] > noneDouble[l + 1]) {
          let tampung = noneDouble[l];
          noneDouble[l] = noneDouble[l + 1];
          noneDouble[l + 1] = tampung;
        }
      }
    }

 
    noneDouble.reverse();

   
    for (let o = 0; o < noneDouble.length; o++) {
      if (player[z] == noneDouble[o]) {
        result.push(o + 1);
      }
    }
  } 

  return result;
}
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25]));
