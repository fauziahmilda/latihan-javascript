//versi CLASS

class User {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }
  tidur(porsi) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let zia = new User("zia", 10);
