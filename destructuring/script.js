//PENGGUNAAN SEDERHANA
const coba = ["satu", "dua", "tiga", "empat", "lima"];

const [a, b, , d, e] = coba; //unpack array
//bisa juga
const [x, ...value] = coba; //value berupa array setelah nilai x = satu

console.log(a);
console.log(b);

//------------------------------------------------
const menuMakanan = {
  nama: "nasi Goreng",
  harga: "25.000",
};
const { nama, harga } = menuMakanan;
console.log(nama);
//------------------------------------------------

({ namaMinuman, hargaMinuman } = {
  namaMinuman: "Americano",
  hargaMinuman: "30.000",
});
console.log(namaMinuman);

//------------------------------------------------
({ namaTanaman: nt, hargaTanaman: ht } = {
  namaTanaman: "Rose",
  hargaTanaman: "30.000",
});
console.log(nt);

//------------------------------------------------
//default value
const mhs = {
  user: "zia",
  nim: "1123",
};
const { user, nim, email = "fauziah.milda@gmail.com" } = mhs;
console.log(email);

//------------------------------------------------
//mengambil field
const customer = {
  id: 123,
  nama: "ziaaa",
  email: "fzh@gmail.com",
};

function getIdCust({ id }) {
  return id;
}
console.log(getIdCust(customer));

function getNameCust(customer) {
  return customer.nama;
}
console.log(getNameCust(customer));

//------------------------------------------------
function kalkulasiDenganArray(x, y) {
  return [x + y, x - y, x * y, x / y];
}
// const [tambah, kurang, kali, bagi] = kalkulasiDenganArray(2, 3);
// console.log(tambah);

function kalkulasiDenganObject(x, y) {
  return {
    tambah: x + y,
    kurang: x - y,
    kali: x * y,
    bagi: x / y,
  };
}
const { kurang, tambah, bagi, kali } = kalkulasiDenganObject(3, 6);
console.log(bagi);

//------------------------------------------------
//destruktur pada argumen
const employee = {
  id: 1,
  nama: "Kartini",
  usia: 30,
  pekerjaan: "Admin",
  gaji: {
    harian: "30.000",
    mingguan: "350.000",
    bulanan: "2.500.000",
  },
};

function cetakEmployee({
  nama,
  usia,
  pekerjaan,
  gaji: { harian, mingguan, bulanan },
}) {
  return `${nama} dengan pekerjaan sebagai ${pekerjaan} berusia ${usia} tahun memiliki gaji bulanan sebesar ${bulanan}`;
}
console.log(cetakEmployee(employee));
