const url = 'http://localhost:3000/films'

document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
    fetchMovieDetails(1);

  
});

function fetchMovies() {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            const movieList = document.querySelector(".films");
            movies.forEach(movie => {
                const series = document.createElement("li");
                series.textContent = movie.title;
                movieList.appendChild(series);
            });
        });
}

function fetchMovieDetails(movieId) {
    fetch(`http://localhost:3000/films/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            const filmImage = document.querySelector("poster")
            filmImage.src = item.poster
            const filmTitle = document.querySelector("filmTitle")
            filmTitle.innerText = item.title
            const runTime = document.querySelector("runtime")
            runTime.innerHTML =`Runtime:<span>${item.runtime}</span>`
            const showTime = document.querySelector("showtime")
            showTime.innerText =`Showtime: ${item.showtime}`
            const availTickets =document.querySelector("ticketsAvailable")
            availTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

            MovieDetails()




            

        });
}

