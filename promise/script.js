/**
 * ! PROMISE
 * *Object yang merepresentaiskan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang akan datang
 * -janji (terpenuhi/ingkar)
 * -states (fullfilled/rejected/pending)
 * -callback (resolve/reject/finally)
 * -aksi (then/catch)
 */

//contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    reject("Ingkar janji");
  }
});

janji1
  .then((response) => console.log("OK!!" + response))
  .catch((response) => console.log("NOT OK!" + response));

//----------------------------------------------------------
//contoh2
let ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati2) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});
janji2
  .finally(() => console.log("SELESAI MENUNGGU")) //UNTUK MENAMBAH ANIMASI LOADING MISALNYA
  .then((response) => console.log("OK! : " + response))
  .catch((response) => console.log("NOT OK! : " + response));

//promise.all()
//misal konek dua api beda
//contoh3

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Iron Man",
        genre: "Action",
        actor: "Tony Stark",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        suhu: 26,
        kondisi: "Cerah berawan",
      },
    ]);
  }, 500);
});

film.then((response) => console.log(response));
cuaca.then((response) => console.log(response));
//bisa gini
Promise.all([film, cuaca]).then((response) => console.log(response));
Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
