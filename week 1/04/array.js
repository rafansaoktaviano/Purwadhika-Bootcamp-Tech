let arr = [1,2,3,4]

arr.push(5) // menambahkan array ke array terakhir
arr.pop()   // mengambil array terakhir
arr.unshift(10) // menambah array di awal 
arr.shift()     // mengambil array di awal

console.log(arr.join(" - "));


function multiplier(factor) {
     function nama(number) {
        return factor * number
    }
     function nomer() {
        return factor * number1
    }
    return nama() + nomer()
}

// let mul3 = multiplier(5)
// console.log(mul3(10));

console.log(multiplier(1)(2)(3));
