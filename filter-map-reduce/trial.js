const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const angbar = [];

// for (let i = 0; i < angka.length; i++) {
//   const element = angka[i];
//   if (element >= 3) {
//     angbar.push(element);
//     console.log(angbar);
//   }
// }

//FILTER
const angbar = angka.filter(function (a) {
  //a representasi tiap2 element angka
  return a >= 3;
});

console.log(angbar);

//MAP
const angbar2 = angka.map(function name(a) {
  //intinya jadi tiap element di array lama bisa dimanipulasi
  return a * 2;
});
console.log(angbar2);

//REDUCE
const angbar3 = angka.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  4 //nilai awal
);
console.log(angbar3);

const angbar4 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  11
);
console.log(angbar4);

//METHODE CHAINING
//cari angka > 5
//kalikan 3
//jumlahkan

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(hasil);
