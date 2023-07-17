class Queue {
    #maxSize
    #container = []
    constructor (maxSize = 10){
        this.#maxSize = maxSize 
    }
    enqueue() {
        this.#maxSize = maxSize
    }

    dequeue(){
        this.#maxSize = maxSize
    }
}