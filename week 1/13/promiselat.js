const jajanan = [
  { item: "pisang goreng", price: 2000 },
  { item: "chiki", price: 5000 },
  { item: "kopi", price: 6000 },
  { item: "starbuk", price: 20000 },
];

function jajan(duit, item, callback) {
  const kembalian = duit - item.price;
  if (kembalian < 0) {
    console.log("Get Out");
  } else {
    callback(kembalian);
  }
}

jajan(50000,jajanan[3],function(response) {
  console.log(response);
})

const tryPromise = () => {
  return new Promise((resolve, reject) => {
    let isError = true;
    if (isError) {
      reject("Error");
    } else {
      resolve("Success");
    }
  });
};

// console.log(tryPromise());

const jajanPromise = (duit, item) => {
  const sisa = duit - item.price;
  return new Promise((resolve, reject) => {
    if (sisa < 0) {
      reject("Get TF OUT");
    } else {
      console.log(sisa);
      resolve(sisa);
    }
  });
};

console.log(jajanPromise(100000, jajanan[3]));

async function runAsyncAwait() {
  console.log("SATU");

  await jajanPromise(15000, jajanan[0]);
  await jajanPromise(15000, jajanan[1]);

  console.log("DUA");
}
// runAsyncAwait();

async function runAsyncAwait2() {
  try {
    console.log("task1");
    const result2 = await jajanPromise(20000, jajanan[2]);

    const result = await tryPromise();
    // console.log(result);
  } catch (err) {
    console.log("error =>" + err);
  } finally {
    console.log("FINALLY");
  }
}

runAsyncAwait2();
