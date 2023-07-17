function dayofProgrammer (y) {
    if(y< 1918) {
        if(y % 4 === 0 ) {
            return "12.09." + y
        }else {
            return "13.09." + y
        }
    } else if(y > 1918) {
        if(y % 400 === 0 || (y % 4 === 0 && y % 100 != 0 )){
            return "12.09." + y
        }else {
            return "13.09." + y
        }
    } else if(y === 1918){
        return "26.09.1918"
    }
}
console.log(dayofProgrammer(1918));

// hari programmer adalah hari ke 256 dari 1 januari setiap tahun 
// 1700 - 