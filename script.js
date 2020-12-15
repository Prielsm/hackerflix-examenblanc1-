import './styles.scss';
import { movies } from './src/data';

console.log(movies[0].title);

const app = document.getElementById('app');

app.innerHTML += `
    <nav class="flex">
        <h1>Hackerflix And Chill</h1>        
        <div class="flex">
          <button id='recent'>Recent films only</button>
          <select id="monSelect">
            <option value="toutGenre" selected>Tout voir</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="caperStory">Caper Story</option>
            <option value="slasher">Slasher</option>
            <option value="scienceFiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="animation">Animation</option>
            <option value="adventure">Adventure</option>
            <option value="documentary">Documentary</option>
            <option value="shortFilm">Short Film</option>
            <option value="indieFilm">Indie Film</option>
            <option value="tVFilm">TV Film</option>
          </select> 
          <button id="buttonSelect">Chercher</button>
          </div>
    </nav>
`;

// -------------------------------------pour trier les genres----------------------------------------------

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

  // ajout d'un event sur la croix pour refermer les descriptions
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
    } else if (e.target.matches(document.getElementById('comedy'))) {
      console.log('this comedy!');
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

  // event sur le bouton du select
  const monSelect = document.getElementById('monSelect');
  const buttonSelect = document.getElementById('buttonSelect');
  buttonSelect.addEventListener('click', () => {
    // console.log(monSelect.value);
    // console.log(monSelect.options[monSelect.selectedIndex].text);
    posters.forEach((poster, i) => {
      const arrayGenre = movies[i].genres;
      // console.log(arrayGenre.find((element) => element === monSelect.options[monSelect.selectedIndex].text));
      // console.log(monSelect.options[monSelect.selectedIndex].text);
      if (arrayGenre.find((element) => element === monSelect.options[monSelect.selectedIndex].text) !== monSelect.options[monSelect.selectedIndex].text) {
        poster.classList.add('d-none');
      }
    });
  });

  // ajout de l'event sur select pour trier par genre
  posters.forEach((poster, i) => {
    const arrayGenre = movies[i].genres;
    // if (poster.contains.classList('d-none')) {
    //   poster.classList.remove('d-none');
    // }
    if (arrayGenre.find((element) => element === 'Thriller') !== 'Thriller') {
      poster.classList.add('d-none');
    }
    // } else if (arrayGenre.find((element) => element === 'Drama') !== 'Drama') {
    //   poster.classList.add('d-none');
    // } else if (arrayGenre.find((element) => element === 'Crime') !== 'Crime') {
    //   poster.classList.add('d-none');
    // } else if (arrayGenre.find((element) => element === 'Biography') !== 'Biography') {
    //   poster.classList.add('d-none');
    // } else if (arrayGenre.find((element) => element === 'Drama') !== 'Drama') {
    //   poster.classList.add('d-none');
    // }
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
