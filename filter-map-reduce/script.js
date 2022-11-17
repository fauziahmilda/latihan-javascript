//ambil semuaelement video, namun ubah ke ARRAY -->> array.from()
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

//pilih hanya yang js lanjutan
let vidJSLanjutan = videos
  .filter(function (video) {
    return video.textContent.includes("JAVASCRIPT LANJUTAN");
  })
  // console.log(vidJSLanjutan);

  //ambil durasi masing-masing video, string
  .map((item) => item.dataset.duration)
  // console.log(vidJSLanjutan);

  //ubah durasi jadi float, ubah menit jadi detik
  .map((waktu) => {
    //10:30 -> [10, 30]
    const parts = waktu.split(":").map((part) => parseFloat(part)); //membelah dengan penbatasnya :
    return parts[0] * 60 + parts[1];
  })

  //jumlahkan semua detik
  .reduce((total, detik) => {
    return total + detik;
  });
console.log(vidJSLanjutan);
//ubah formatnya jadi jam menit detik
const jam = Math.floor(vidJSLanjutan / 3600);
vidJSLanjutan = vidJSLanjutan - jam * 3600;
const menit = Math.floor(vidJSLanjutan / 60);
const detik = vidJSLanjutan - menit * 60;
console.log(detik);

//simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

//jumlah video
const jmlVideo = videos.filter(function (video) {
  return video.textContent.includes("JAVASCRIPT LANJUTAN");
}).length;
console.log(jmlVideo);

const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
