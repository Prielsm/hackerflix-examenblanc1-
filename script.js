import './styles.scss';
import { movies } from './src/data';

console.log(movies[0].title);

const app = document.getElementById('app');

// -----------------------------------------------------------------création de la nav bar--------------------------------------------------------
app.innerHTML += `
    <nav class="flex">
        <h1>Hackerflix And Chill</h1>        
        <div class="flex">
          <button id='recent'>Recent films only</button>
          <select id="monSelect">
            <option selected>Tout voir</option>
            <option>Thriller</option>
            <option>Drama</option>
            <option>Crime</option>
            <option>Biography</option>
            <option>History</option>
            <option>Comedy</option>
            <option>Romance</option>
            <option>Mystery</option>
            <option>Caper Story</option>
            <option>Slasher</option>
            <option>Science Fiction</option>
            <option>Fantasy</option>
            <option>Animation</option>
            <option>Adventure</option>
            <option>Documentary</option>
            <option>Short Film</option>
            <option>Indie Film</option>
            <option>TV Film</option>
          </select> 
          <button id="buttonSelect">Chercher</button>
          </div>
    </nav>
`;

function render() {
  // ------------------------------------------------------------création de posters---------------------------------------------------
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

  // -----------------------------------------------ajout des descriptions sur les posters (event sur poster)-------------------------------------------------------
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

  // -----------------------------------ajout d'un event sur la croix pour refermer les descriptions----------------------------------
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

  // ----------------------------------------------set up du bouton pour les films récents------------------------------------------
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

  // // -------------------------------------bouton lié au select pour trier avec les genres----------------------------------------------
  const monSelect = document.getElementById('monSelect');
  const buttonSelect = document.getElementById('buttonSelect');
  buttonSelect.addEventListener('click', () => {
    // console.log(monSelect.value);
    // console.log(monSelect.options[monSelect.selectedIndex].text);
    posters.forEach((poster, i) => {
      const arrayGenre = movies[i].genres;
      const myOption = monSelect.options[monSelect.selectedIndex].text;
      // console.log(arrayGenre.find((element) => element === monSelect.options[monSelect.selectedIndex].text));
      // if (arrayGenre.find((element) => element === myOption) !== myOption) {
      //   poster.classList.add('d-none');
      // }
      // if (poster.contains.classList('d-none')) {
      //   poster.classList.remove('d-none');
      // }
      if (!arrayGenre.some((element) => element === myOption)) {
        poster.classList.add('d-none');
      }
    });
  });

  // ------------------------------------------------TEST DU TRI PAR GENRE AVEC LE GENRE THRILLER-------------------------------------------------
  // posters.forEach((poster, i) => {
  //   const arrayGenre = movies[i].genres;

  //   if (arrayGenre.find((element) => element === 'Thriller') !== 'Thriller') {
  //     poster.classList.add('d-none');
  //   }
  // });

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
