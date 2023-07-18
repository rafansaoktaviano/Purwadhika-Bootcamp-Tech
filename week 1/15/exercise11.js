// Write a code to count the number of days passed since beginning of the year

function daysPassed(currentdays) {
  let fullYear = new Date();
  let currentMonth = new Date(currentdays);
  let currentDay = new Date(currentdays);

    return currentMonth.getMonth() * 30 + currentDay.getDate()
}

console.log(daysPassed("2020-5-14"));
