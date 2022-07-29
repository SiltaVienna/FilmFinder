
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

//Filtermovies zoeken op woord in titel
const filterMovies = (wordInMovie) => {
    return movies.filter((item) => {
        return item.title.includes(wordInMovie);

    });
};

console.log(filterMovies("Batman"));


// Radiobutton on change event 
const handleOnChangeEvent = (event) => {
    console.log(event.target.value)
    switch (event.target.value) {
        case "princess-films":
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman":
            addMoviesToDom(filterMovies("Batman"));
            break;
    };

};

//Aanroepen van change event functie met addeventlistener, moet buiten de functie
const radioButton = document.getElementsByName("menu-filter");
radioButton.forEach(radioButton => {
    radioButton.addEventListener('change', handleOnChangeEvent)
});


