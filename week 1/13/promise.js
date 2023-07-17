const jajanan = [
    {item:"pisang goreng", price:2000},
    {item:"chiki", price:5000},
    {item:"kopi",price:6000},
    {item:"starbuk",price:20000}
]

function jajan(duit, item, callback) { 
    const sisa = duit - item.price
    if( sisa < 0) { 
        console.log("keluar anda")
    } else {
        callback(sisa)
    }
}

const tryPromise = () => {
    return new Promise((resolve, reject) => {
        let isError = true
        if(isError) { 
            reject("Error")
        } else {
            resolve("Success")
        }
    })
}

const jajanPromise = (duit, item) => {
    const sisa = duit - item.price
    return new Promise((resolve, reject) => {
        if(sisa < 0) { 
            reject("keluar anda")
        } else { 
            console.log("sisa => ",sisa)
            resolve(sisa)
        }
    })
}

async function runAsyncAwait() { 
    console.log("SATU")
    
    await jajanPromise(15000, jajanan[0])

    await jajanPromise(15000, jajanan[1])


    console.log("DUA")
}

async function runAsyncAwait2 ( ) { 
    try { 
        console.log("task1")
        const result2 = await jajanPromise(15000, jajanan[1])
        console.log(result2)
        const result = await tryPromise()
        console.log(result)
        
    } catch(err) { 
        console.log("error => ", err)
    } finally {
        console.log("finally")
    }
   
}

// runAsyncAwait()

runAsyncAwait2()