//PROTOTYPE

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain`;
};
Mahasiswa.prototype.tidur = function (porsi) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur`;
};

let zia = Mahasiswa("zia", 20);

//---------------
let angka = [1, 2, 3];
// let angka = new Array(); //dibelakang layar
// function Array() {
//   let this = Object.create(Array.prototype);
// }
console.log(angka.reverse());
