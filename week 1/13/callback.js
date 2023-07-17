

function bar(callback) {
    //console.log(foo) // nilai foo
    // apalah()
    callback()
}


bar(() => {
    var name = "dimas"
    console.log("ini function buatan saya sendiri")
})

console.log(bar());
// bar(apalah)

// setTimeout(() => {
//     console.log("3 detik telah berlalu")
//     apalah()
// },3000)

// Array.sort(() => {
//     conso
//     return a - b
// })

// if(0) { 
//     console.log("test") 
// }