//SPREAD OPERATOR
//Memecah iterables menjadi single element

//String juga dapat dipecah dengan ...
const user = ["Mahalini", "Fauziah", "Katerine"];
console.log(...user[1]);
//F a u z i a h

const [...value] = [...user[1]]; //ini dipecah

value.forEach(function (item, index) {
  value[index] = item.toUpperCase();
});
const nVal = value.join("");
console.log(nVal);

const val = user[0].toUpperCase();
console.log(val);

//------------------------------------------tampil
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
console.log(huruf);

//------------------------------------------
function myFunc(...myArgs) {
  return myArgs;
  //atau
  // return Array.from(arguments);
  // return [...arguments];
}
console.log(myFunc(1, 2, 3, 4, 5));
//------------------------------------------
function jumlah(...angka) {
  let total = 0;
  for (const a of angka) {
    //a itu satu dari angka
    total += a;
  }
  return total;

  //atau
  // return angka.reduce((a,b)=> a+b);
}
console.log(jumlah(1, 2, 3, 4, 5));
