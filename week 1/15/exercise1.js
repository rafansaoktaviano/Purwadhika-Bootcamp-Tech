// Write a code to check whether the date is a weekend

function weekend(date1) {
  const date = new Date(date1);
  if (date.getDay() === 6 || date.getDay() === 0) {
    return "Weekend";
  } else {
    return "weekday"
  }
}

console.log(weekend("Oct 20 2014"));
console.log(weekend("Oct 19 2014"));
console.log(weekend("Oct 18 2014"));
