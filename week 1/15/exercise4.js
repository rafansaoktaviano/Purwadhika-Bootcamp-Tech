// ● Write a code to find most common character from a string

function mostCom(str) {
  let temp = 0;
  let result = "";
  for (let i = 1; i < str.length; i++) {
    for (let j = i + 1; j < str.length++; j++) {
      if (str[i].charCodeAt() === str[j].charCodeAt()) {
        result = str[i]
      }
    }
  }
  return result;
}

console.log(mostCom("ARIES DIMAS YUDHISTIRA"));
console.log(mostCom("VISUAL STUDIO CODE"));
