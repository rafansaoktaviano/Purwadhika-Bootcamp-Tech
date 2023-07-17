// function calculator(a, b, callback) { 
//     callback(a+b)
// }

// function displayer(something) { 
//     console.log(something)
// }

// calculator(5,5,displayer)

function call(a,b,callback) {
    callback(a*b)
}

function display(test) {
    console.log(test);
}

call(10,5,display)