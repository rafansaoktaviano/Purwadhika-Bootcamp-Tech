// Write a code to calculate age

function ageCount(born) {
  let currentDate = new Date();
  let born1 = new Date(born);
  let age =  currentDate.getFullYear() - born1.getFullYear();
  return age
}

console.log(ageCount("2020-07-15"));
