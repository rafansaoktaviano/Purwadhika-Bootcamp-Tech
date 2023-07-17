let s = "middle-Outz"; // VJGTG KU C URA
let key = 2;
let alpha =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let panjang = numb.length;
function caesar_chiper(s, key) {
  // Write your code here

  let encrpyted = "";

  for (let i = 0; i <= s.length - 1; i++) {
    // if (s[i] === num[i]) {
    //     encrpyted += num[i]
    //   }
    for (let j = 0; j <= alpha.length - 1; j++) {
      if (s[i] === " ") {
        encrpyted += " ";
        break;
      } else if (
        s[i] !== " " &&
        alpha.includes(s[i]) === false
      ) {
        encrpyted += s[i]
        break
      } else if (s[i] === alpha[j]) {
        encrpyted += alpha[j + key];
        break;
      }
    }
  }
  return encrpyted.toUpperCase;
}

console.log(caesar_chiper(s, key));

// "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  "THERE IS A SPY"
