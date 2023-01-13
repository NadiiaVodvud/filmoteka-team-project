import { refs } from './refs';
import genresId from '../genres.json';

export function renderSliderFilmCard({ results }) {
  const markup = results
    .map(({ id, poster_path, title, original_title, original_name, release_date, first_air_date, genre_ids }) => {
      let filmGenreId = '';
      if (genre_ids) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .join(', ');
      }
      return `
      <li class="glide__slide" data-id=${id}>
      <a class="glide__link" href= "">
      <div class="glide__container">
                 <img   class='glide__img' alt= '${title || original_title || original_name}' width='360' loading="lazy"
                  src='https://image.tmdb.org/t/p/original${poster_path}'/>
                  <div class="glide__text">
                  <h2 class="glide__title">${title || original_title || original_name}</h2>
                  <p class="glide__genres">${filmGenreId}<span>|${(
        release_date || first_air_date|| 'Not available'
      ).slice(0, 4)}</span></p></div></div></a>
              </li>`;
    })
    .join('');
  refs.glideSlides.innerHTML = markup;
}

export function renderFilmCard({ results }) {
  cleanTopFilmsMarkUp();

  const markup = results
    .map(({ id, poster_path, title, original_title, original_name, release_date, first_air_date, genre_ids }) => {
      let filmGenre = '';
      if (genre_ids) {
        let filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name);

        if (filmGenreId.length >= 4) {
          filmGenre = `${filmGenreId.slice(0, 2).join(', ')},  Others`;
        } else {
          filmGenre = filmGenreId.join(', ');
        }
      }
  
      const img = `<img   class='film__img lazyload' alt= '${title || original_title || original_name}' width='100%' loading="lazy"
      data-src='https://image.tmdb.org/t/p/original${poster_path}'/>`;

      return `<li class="film__item" data-id=${id}>
                  ${poster_path ? img : '<p>Poster is not available.</p>'}
                  <h2 class="films__title">${ original_title || title ||original_name} </h2>
                  <p class="films__genres">${
                    filmGenre || 'Not available'
                  }<span>|${(release_date || first_air_date|| 'Not available').slice(
        0,
        4
      )}</span></p>
              </li>`;
    })
    .join('');
  refs.topFilms.insertAdjacentHTML('afterbegin', markup);
}

function cleanTopFilmsMarkUp() {
  refs.topFilms.innerHTML = '';
}
