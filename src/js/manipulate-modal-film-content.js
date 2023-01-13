export function renderModalFilmCard(filmInfo) {
  const filmModalContent = document.querySelector(".film-modal__content");

  if (!filmInfo) {
    filmModalContent.innerHTML = "<p class='film-modal__error'>We are sorry but there is no detailed info about this movie.</p>";
    return;
  };

  const { id, poster_path, original_title, vote_average, vote_count, popularity, genres, overview } = filmInfo;
  const filmGenres = genres.slice(0, 3).map(({ name }) => name).join(", ");


  const markup = `<img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}"
    class="film-modal__img" width="240" height="357">
  <div class="film-modal__info">
    <h2 class="film-modal__title">${original_title}</h2>
    <ul class="film-modal__stats-list">
      <li class="film-modal__stats-item">
        <p class="film-modal__txt--left">Vote / Votes</p>
        <p class="film-modal__txt--right"><span>${vote_average}</span> / <span>${vote_count}</span></p>
      </li>
      <li class="film-modal__stats-item">
        <p class="film-modal__txt--left">Popularity</p>
        <p class="film-modal__txt--right">${popularity}</p>
      </li>
      <li class="film-modal__stats-item">
        <p class="film-modal__txt--left">Original title</p>
        <p class="film-modal__txt--right">${original_title}</p>
      </li>
      <li class="film-modal__stats-item">
        <p class="film-modal__txt--left">Genre</p>
        <p class="film-modal__txt--right">${filmGenres}</p>
      </li>
    </ul>
    <div class="film-modal__about">
      <h3 class="film-modal__about-title">About</h3>
      <p class="film-modal__about-txt">${overview}</p>
    </div>
    <div class="film-modal__buttons">
      <button type="button">add to watched</button>
      <button type="button">add to queue</button>
    </div>
  </div>`;

  filmModalContent.innerHTML = markup;
  filmModalContent.setAttribute("film-modal-id", id);
};

export function clearModalFilmCard() {
  const filmModalContent = document.querySelector(".film-modal__content");
  filmModalContent.innerHTML = "";
  filmModalContent.removeAttribute("film-modal-id");
};