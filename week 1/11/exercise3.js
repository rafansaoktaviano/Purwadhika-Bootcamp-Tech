function anagram(str1, str2) {
  // let temp = [];

  for (let i = 0; i < str1.length; i++) {
    let hasil = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        str2.replace(str1[i], " ");
        hasil = true;
        break;
      }
    }
    if (hasil === false) {
      return false;
    }
  }
  return true;
}

console.log(anagram("rat", "tar"));
