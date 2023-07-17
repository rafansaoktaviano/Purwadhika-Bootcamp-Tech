const jajanan = [
  { item: "pisang goreng", price: 2000 },
  { item: "chiki", price: 5000 },
  { item: "kopi", price: 6000 },
];

function jajan(duit, item, callback) {
  const sisa = duit - item.price;
  if (sisa < 0) {
    console.log("keluar anda");
  } else {
    callback(sisa);
  }
}

jajan(15000, jajanan[0], (sisa) => {
  console.log(sisa);
  jajan(sisa, jajanan[2], (sisa) => {
    console.log(sisa);
    jajan(sisa, jajanan[1], (sisa) => {
      console.log(sisa);
      jajan(sisa, jajanan[1], (sisa) => {
        console.log(sisa);
      });
    });
  });
});
