const menuLengkap = [
  {
    nama: "Nasi Goreng",
    harga: "25.000",
  },
  {
    nama: "Mie Rebus",
    harga: "15.000",
  },
  {
    nama: "Nasi Goreng",
    harga: "25.000",
  },
];

const el = `<div class="menu">
${menuLengkap
  .map(
    (m) => `<ul class="">
<li>${m.nama}</li>
<li>${m.harga}</li>
</ul>`
  )
  .join("")}
</div>`;

const makanan = {
  nama: "Sup Jamur",
  harga: "27.000",
  pedas: "sedang",
};

const el2 = `<div class="makanan">
<ul>
<li>${makanan.nama} ${makanan.pedas ? `(pedas? ${makanan.pedas})` : ""}</li>
<li>${makanan.harga}</li>
</ul>
</div>`;

//HTML FRAGMEN BERSARANG
const minuman = {
  nama: "Boba",
  harga: "15.000",
  topping: ["Boba", "Oreo", "Red Velvet", "Aloe Vera"],
};
function cetakTopping(topping) {
  return `
    <ol>
    ${topping.map((t) => `<li>${t}</li>`).join("")}
    </ol>`;
}

const el3 = `<div class="minuman">
<h2>${minuman.nama}</h2>
<span class="harga">${minuman.harga}</span>
<h4>Macam-macam Topping : </h4>
${cetakTopping(minuman.topping)}
</div>`;

// document.body.innerHTML = el3;

//---------------------------------------
//TAGGED TEMPLATES
const nama = "Zia";
const color = "black";

function coba(strings, ...values) {
  //values untuk mengambil expression
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;
  return strings.reduce(
    (result, str, index) => `${result}${str}${values[index] || ""}`,
    ""
  );
}

const str = coba`Halo, ${nama} desu. I like ${color} color.`;
// console.log(str);

//------------------------------------
//HASIL PENCARIAN
const nama2 = "Zia";
const color2 = "black";
const game = "Valorant";

function highlight(strings, ...values) {
  //values untuk mengambil expression
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;
  return strings.reduce(
    (result, str2, index) => `${result}${str2}
    <span class="hl">${values[index] || ""}</span>
    `,
    ""
  );
}

const str2 = highlight`Halo, ${nama2} desu. I like ${color2} color. I love game ${game} so much.`;

document.body.innerHTML = str2;

// console.log(str2);
