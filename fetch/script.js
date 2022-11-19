// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=e0c792f5&s=" + $(".input-keyword").val(),
//     success: (result) => {
//       const movies = result.Search;
//       console.log(movies);

//       let cards = "";

//       movies.forEach((movie) => {
//         cards += showCards(movie);
//       });
//       $(".movie-container").html(cards);

//       //ketika tombol detail diklik
//       $(".modal-detail-button").on("click", function () {
//         console.log($(this).data("imdbid"));
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=e0c792f5&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (errors) => {
//             console.log(errors.responseText);
//           },
//         });
//       });
//     },
//     error: (errors) => {
//       console.log(errors.responseText);
//     },
//   });
// });

//FETCH
//------event handler
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=e0c792f5&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((movie) => {
        cards += showCards(movie);
      });
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      //ketika tombol detail diklik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((button) => {
        button.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=e0c792f5&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(movie) {
  return ` <div class="col-md-4 my-3">
                    <div class="card"">
                        <img src="${movie.Poster}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                            data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                        </div>
                        </div>
                </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
        <div class="col-md">
            <img src="${m.Poster}" alt="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}
