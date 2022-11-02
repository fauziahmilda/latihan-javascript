//function EXPRESSTION
// let tampilEx = function (nama) {
//   alert(`Halo ${nama}`);
// };

// tampilEx("Ziaa");

//ARROW function
let tampilaR = (nama) => `Halo, ${nama}`;
console.log("ziaa");
//---------------------------------------------
let tampilaR2 = (nama, usia) => {
  return `Halo, ${nama}, usia kamu ${usia}`;
};
console.log(tampilaR2("zia", 23));
//---------------------------------------------
let tampilAr3 = () => "Hello World";
console.log(tampilAr3());

//---------------------------------------------
let mhs = ["zia", "dira", "erik"];
//bentuk function biasa
// let jmlHuruf = mhs.map(function (nama) {
//   return nama.length;
// });

//bentuk arrow fucntion
// let jmlHuruf = mhs.map((nama) => nama.length);

//memetakan sebagai objek
//memakai kurung agar kurung kurawal dianggap objek bukan return
// let jmlHuruf = mhs.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.log(jmlHuruf);
// console.table(jmlHuruf);

//cosntructure function
const Customer1 = function () {
  this.nama = "zia";
  this.umur = 23;
  //ini method, function expression, disimpan kedalam variable, gaakan kena hoisting
  this.sayHello = function () {
    console.log(`Hi saya ${this.nama}, umur saya ${this.umur}`);
  };
  //ini funciton declereation, kena hoisting
  // setInterval(() => {
  //   console.log(this.umur++);
  // }, 2000);
};
const zia1 = new Customer1();

//arrow function
const Customer2 = function () {
  this.nama = "zia";
  this.umur = 23;
  //methode bisa jadi arrow function
  this.sayHello = function () {
    console.log(`Hi saya ${this.nama}, umur saya ${this.umur}`);
  };
};
const zia2 = new Customer2();

//object literal
const cst1 = {
  nama: "zia",
  umur: 23,
  sayHi: () => {
    console.log(`Hi saya ${nama}, umur saya ${umur}`);
  },
};
