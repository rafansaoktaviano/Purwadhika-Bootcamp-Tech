class Queue {
  constructor() {
    this.queue = [];
    this.isProccessing = false;
  }

  enqueue(order) {
    this.queue.push(order);
    if (!this.isProccessing) {
      this.proccessQueue();
    }
  }

  proccessQueue() {
    if (this.queue.length === 0) {
      this.isProccessing = false;
      return;
    }

    const order = this.queue.shift();
    this.isProccessing = true;
    const proccessTime = Math.floor(Math.random() * 10) + 1;

    console.log(`Processing order : ${order} (Processing Time: ${proccessTime})`);

    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log(`${order} processed`);
            this.proccessQueue()
            resolve()
        },proccessTime * 1000)
    })
  }
}


module.exports = Queue