
const movieList = document.getElementById("movies-overzicht");

//Functie films toevoegen
// const addMoviesToDom = movies.map((item) => {

//     const newA = document.createElement("a");
//     const newLi = document.createElement("li");
//     const newImg = document.createElement("img");

//     newImg.src = item.poster;
//     newA.href = "https://www.imdb.com/title/" + movies.imdbID;
//     newLi.appendChild(newA);
//     newA.appendChild(newImg);
//     return newLi;
// });

// addMoviesToDom.forEach((newLi) => {
//     movieList.appendChild(newLi);
// });

//Bovenstaande functie anders geschreven omdat ik addMoviesToDom nodig heb als functie
const addMoviesToDom = (movies) => {
    const moviesToList = movies.map((item) => {

        const newA = document.createElement("a");
        const newLi = document.createElement("li");
        const newImg = document.createElement("img");

        newImg.src = item.poster;
        newA.href = "https://www.imdb.com/title/" + movies.imdbID;
        newLi.appendChild(newA);
        newA.appendChild(newImg);
        return newLi;
    });

    moviesToList.forEach((newLi) => {
        movieList.appendChild(newLi);
    });
};

addMoviesToDom(movies);

//Remove films 
const removeMoviesFromDom = () => {
    while (movieList.hasChildNodes()) {
        movieList.removeChild(movieList.firstChild);
    };
};

//Filtermovies zoeken op woord in titel
function filterMovies(wordInMovie) {
    removeMoviesFromDom();
    return movies.filter((item) => {
        return item.title.includes(wordInMovie);
    });
};

//Filterlatest movies
const filterLatestMovies = () => {
    removeMoviesFromDom();
    return movies.filter((item) => {
        return item.year >= 2014;
    });
};

// Radiobutton on change event 
const handleOnChangeEvent = (event) => {
    console.log(event.target.value)
    switch (event.target.value) {
        case "allmovies":
            addMoviesToDom(movies);
            break;
        case "latestmovies":
            addMoviesToDom(filterLatestMovies());
            break;
        case "princessmovies":
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batmanmovies":
            addMoviesToDom(filterMovies("Batman"));
            break;
        case "xmenmovies":
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "avengermovies":
            addMoviesToDom(filterMovies("Avengers"));
            break;

    };

};

//Aanroepen van change event functie met addeventlistener, moet buiten de functie
const radioButton = document.getElementsByName("menu-filter");
radioButton.forEach(radioButton => {
    radioButton.addEventListener('change', handleOnChangeEvent)
});

//Zoekbalk werkend maken
const searchInput = document.getElementById("zoekbalk");

const zoekenDan = searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const searchMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchString);
    });
    console.log(searchMovies);
});




