// Write a code to get minimum date from array of dates.

let  dates = ["2023-07-15", "2023-06-18", "2023-07-12", "2023-07-20"]

function minDates(dates) {
    let min = dates[0]
    
    for(let i = 0; i < dates.length; i++) {
        if (dates[i] < min) {
            min = dates[i];
          }
    }

    return min
}

console.log(minDates(dates));