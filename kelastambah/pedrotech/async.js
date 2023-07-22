const getFruits = async(name) => {
    const fruits = {
        pineapple: "a",
        peach: "p",
        banana: "b"
    }

    return fruits[name]
}


getFruits("banana").then((name) => {
    console.log(name);
})