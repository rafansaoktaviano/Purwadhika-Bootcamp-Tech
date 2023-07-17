function recursionFact(n) {
    if(n === 0) {
        return 1
    }
    return n * recursionFact(n-1)
}

console.log(recursionFact(0));
console.log(recursionFact(1));
console.log(recursionFact(5));

// Big o = O(n)