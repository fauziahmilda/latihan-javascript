//Execution context, hoisting, scope

//2 fase execution context

//1. creation (global context) -> pembentukan -> mengecek ada ga variable
//semua var yang terdeteksi di set dengan undefined
//nama function =fn() --> tapi ga dijalanin dlu
//disebut HOISTING

//window = global object
//this = window

//2. execution
//baru disini semua itu dijalanin dari atas kebawah

//() --> artinya eksekusi
/*
var nama = "zia";
var umur = 23;

console.log(SayHello());

//harusnya sebuah function itu ada returnnya

function SayHello() {
  return `Hello, nama Saya ${nama}, umur Saya ${umur}`;
}
*/

// closure buat bikin fucntion factory dan private methode

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// let selamatSore = ucapkanSalam("Sore");

// selamatPagi("Zia");

// console.dir(selamatMalam("aldira"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());

//daripada gini
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());
