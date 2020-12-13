import './styles.scss';
import { movies } from './src/data';

console.log(movies[0].title);

const app = document.getElementById('app');

app.innerHTML += `
    <nav class="flex">
        <h1>Hackerflix And Chill</h1>
        <button id='recent'>Recent film only</button>
    </nav>
`;

function render() {
  let stringPosters = '<main class="flex">';
  movies.forEach((movie) => {
    if (movie.img === true) {
      stringPosters += `
            <div class="poster">
                <img src="posters/${movie.imdb}.jpg" alt="">

                <section class="no-poster d-none">
                    <p class="title"><strong>${movie.title}</strong></p>
                    <p>Année : ${movie.year}</p>
                    <p>Genre : ${movie.genres}</p>
                    <p>Notes : ${movie.note}</p>
                    <p>Plot : ${movie.title}</p>
                </section>
            </div>
        `;
    } else {
      stringPosters += `
            <div class="no-poster poster">
                <p class="title"><strong>${movie.title}</strong></p>
                <section class="d-none">
                    <p>Année : ${movie.year}</p>
                    <p>Genre : ${movie.genres}</p>
                    <p>Notes : ${movie.note}</p>
                    <p>Plot : ${movie.title}</p>
                </section>
            </div>
        `;
    }
  });
  stringPosters += '</main>';

  app.innerHTML += stringPosters;

  const posters = app.querySelectorAll('.poster');
  //   console.log(posters);
  posters.forEach((poster) => {
    const section = poster.querySelector('section');
    const img = poster.querySelector('img');
    // console.log(section);
    poster.addEventListener('click', () => {
      if (poster.classList.contains('no-poster')) {
        if (section.classList.contains('d-none')) {
          section.classList.remove('d-none');
        } else {
          section.classList.add('d-none');
        }
      } else if (section.classList.contains('d-none')) {
        section.classList.remove('d-none');
        img.classList.add('d-none');
      } else {
        section.classList.add('d-none');
        img.classList.remove('d-none');
      }
    });
  });

  const buttonRecent = document.getElementById('recent');
  console.log(buttonRecent);
  buttonRecent.addEventListener('click', () => {
    console.log('hi');
    const recentsPosters = app.querySelectorAll('.poster');
    console.log(recentsPosters);
    recentsPosters.forEach((recentPoster, i) => {
      if (movies[i].year < 2000) {
        if (recentPoster.classList.contains('d-none')) {
          recentPoster.classList.remove('d-none');
        } else {
          recentPoster.classList.add('d-none');
        }
      }
    });
  });

  console.log(app);
}

render();
