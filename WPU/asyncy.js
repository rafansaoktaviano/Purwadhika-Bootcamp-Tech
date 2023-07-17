// function satu() {
//   console.log("satu");
// }
// function dua() {
//   setTimeout(() => {
//     console.log("dua");
//   }, 3000);
// }
// function tiga() {
//   console.log("tiga");
// }

// satu();
// dua();
// tiga();

//  ==============

const token = Math.random() * 12314;
const pictures = ["1.jpg", "2.jpg", "3.jpg"];
function login(username) {
  console.log("proses");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username !== "Raf") {
        failed("Sorry wrong Data");
      }
      success({ token });
    }, 200);
  });
}

function getUser(token) {
  console.log("proses");
  return new Promise((success, failed) => {
    if (!token) {
      failed("THERE'S NO TOKEN");
    }
    if (token) {
      setTimeout(() => {
        success({ apiKey: "xkey123" });
      }, 500);
    }
  });
}
function getPictures(apiKey) {
  if (apiKey) {
    setTimeout(() => {
      return ({pic: pictures})
    }, 1500);
  }
}

const user = login("Raf");
user.then(function (response) {
  const { token } = response;
  getUser(token).then(function (response) {
        const { apiKey } = response;
        console.log(apiKey);
      })
      .catch((err) => console.log(err));
});


async function userDisplay(){
    const {token} = await login("Raf")
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)
    console.log(user);
}