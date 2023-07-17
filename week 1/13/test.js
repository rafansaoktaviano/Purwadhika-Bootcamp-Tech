module.exports = class Queue {
  constructor() {
    this.list = [];
  }

  addQueue(item) {
    this.list.push(item);
  }

  print() {
    console.log(this.list);
  }
   itemShift() { 
        return new Promise((resolve, reject) => {
            if(this.list.length - 1> 0) {
                var timeProcessing = Math.ceil(Math.random() * 10)
                setTimeout(() => {
                    console.log("Queue ",this.list[0]," done in ",(timeProcessing)," seconds")
                    resolve(this.list.shift())
                }, timeProcessing*1000)
              
            } else {
                reject("tidak ada lagi yg di proses ")
            }
        })
    }
  async run() {
    while (this.list.length - 1 > 0) {
      try {
        await this.itemShift();
      } catch(err) {
        console.log("err => " + err);
      }
    }
  }
};
