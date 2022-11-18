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

//------------------------------------
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
console.log(huruf);
