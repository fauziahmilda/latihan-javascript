//Cara membuat object pada javascript
//1. Object literal
//PROMBEL TIDAK EFEKTIF UNTUK MEMBUAT OBJEK YANG BANYAK
// let mahasiswa = {
//   nama: "Zia",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat datang ${this.nama}, Itadakimas`);
//   },
// };

//2. function declaration

//ini object, yang akan disimpan setiap dijalankan
//PROMBLEM: PENYIMPANAN DI MEMORINYA TIDAK EFEKTIF
// const methodeMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat datang ${this.nama}, Itadakimas`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(
//       `Selamat bermain ${this.nama}, ingat energimu berkurang, jadi ${this.energi}`
//     );
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(
//       `Selamat tidur ${this.nama}, energi akan bertambah, jadi ${this.energi}`
//     );
//   },
// };

// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = methodeMahasiswa.makan;
//   mahasiswa.main = methodeMahasiswa.main;
//   mahasiswa.tidur = methodeMahasiswa.tidur;

//   return mahasiswa;
// }

// let zia = mahasiswa("zia", 20);

//3. Conctructor fucntion
//memudahkan membuat prototype
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat datang ${this.nama}, Itadakimas`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(
//       `Selamat bermain ${this.nama}, ingat energimu berkurang, jadi ${this.energi}`
//     );
//   };
// }

// let zia = new mahasiswa("zia", 20);

//4. Object create
//mengelola memori
const methodeMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Selamat datang ${this.nama}, Itadakimas`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(
      `Selamat bermain ${this.nama}, ingat energimu berkurang, jadi ${this.energi}`
    );
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(
      `Selamat tidur ${this.nama}, energi akan bertambah, jadi ${this.energi}`
    );
  },
};

function mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodeMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let zia = mahasiswa("zia", 20);
