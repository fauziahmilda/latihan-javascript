const box = document.querySelector(".box");
box.addEventListener(`click`, function () {
  let satu = `size`;
  let dua = `caption`;

  if (this.classList.contains(satu)) {
    // satu = temp;
    // satu = dua;
    // dua = temp;

    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(`size`);
  //   console.log(this);
  setTimeout(() => {
    this.classList.toggle(`caption`);
    // console.log(this);
  }, 600);
});
