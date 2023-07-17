const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = alphaLower.toUpperCase();
let encrypted = "";


for (let i = 0; i < plain_text.length; i++) {
  const character = plain_text[i];

  if (alphaLower.includes(character)) {
    const currentIndex = alphaLower.indexOf(character);
    const newIndex = (currentIndex + key) % 26;
    encrypted += alphaLower[newIndex];
  } else if (alphaUpper.includes(character)) {
    const currentIndex = alphaUpper.indexOf(character);
    const newIndex = (currentIndex + key) % 26;
    encrypted += alphaUpper[newIndex];
  } else {
    encrypted += character;
  }
}


