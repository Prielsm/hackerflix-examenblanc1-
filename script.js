import './styles.scss';
import { movies } from './src/data';

console.log(movies[0].title);

const app = document.getElementById('app');

app.innerHTML += `
    <nav class="flex">
        <h1>Hackerflix And Chill</h1>
        <button id='recent'>Recent films only</button>
    </nav>
`;

function render() {
  // création de posters
  let stringPosters = '<main class="flex">';
  movies.forEach((movie, i) => {
    if (movie.img === true) {
      stringPosters += `
            <div class="poster">
                <img src="posters/${movie.imdb}.jpg" alt="">

                <section class="no-poster d-none">                    
                    <p class="title"><strong>${movie.title}</strong></p>
                    <i class="fas fa-times" id="${i}"></i>
                    
                    <p>Année : ${movie.year}</p>
                    <p>Genre : ${movie.genres}</p>
                    <p>Notes : ${movie.note}</p>
                    <p>Plot : ${movie.plot}</p>
                </section>
            </div>
        `;
    } else {
      stringPosters += `
            <div class="no-poster poster">
                <p class="title"><strong>${movie.title}</strong></p>
                <section class="d-none section_noposter">
                    <i class="fas fa-times"></i>
                    <p>Année : ${movie.year}</p>
                    <p>Genre : ${movie.genres}</p>
                    <p>Notes : ${movie.note}</p>
                    <p>Plot : ${movie.plot}</p>
                </section>
            </div>
        `;
    }
  });
  stringPosters += '</main>';

  app.innerHTML += stringPosters;

  // ajout des descriptions sur les posters
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
        }
      } else if (section.classList.contains('d-none')) {
        section.classList.remove('d-none');
        img.classList.add('d-none');
      }
    });
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.fa-times')) {
      const parent = e.target.parentNode;
      console.log(parent);
      const imgParent = parent.parentNode.querySelector('img');
      console.log(imgParent);
      if (parent.classList.contains('section_noposter')) {
        parent.classList.add('d-none');
      } else {
        parent.classList.add('d-none');
        imgParent.classList.remove('d-none');
      }
      // console.log(movies[e.target.id]);
    }
  });

  // ajout du bouton pour les films récents
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
          buttonRecent.innerHTML = 'Recent films only';
        } else {
          recentPoster.classList.add('d-none');
          buttonRecent.innerHTML = 'All films';
        }
      }
    });
  });

  console.log(app);
}

render();

// -----------------------------------------Pour trier les notes------------------------------------------------------

// array.forEach(element => {
//   movies.forEach(movie => {
//   noteHaute = '';
//   movie.note
//   --> récupérer l'élement qui a la note la plus haute
//   if movie.note>noteHaute
//     noteHaute = movie.note;
// });
// nouvelleListe = [];
// nouvelleListe += noteHaute;
// });

// movies.forEach(movie => {
//   listeNotes = [];
//   listeNotes += movie.note;
// });

// listeHautversBas = [];
// listeNotes.forEach(element => {
//   listeNotes.max
// });
