const url = 'http://localhost:3000/films'


document.addEventListener("DOMContentLoaded", () => {
    MoviesTitle();
    MovieDetails(1);
});

function MoviesTitle() {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            const movieList = document.querySelector(".films");
            movies.forEach(movie => {
                const series = document.createElement("li");
                series.textContent = movie.title;
                series.addEventListener("click", () => MovieDetails(movie.id));
                movieList.appendChild(series);
            
               
            });
        });
}

function MovieDetails(movieId) {
    fetch(`${url}/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            const moviePoster = document.querySelector(".movie-poster")
            moviePoster.src = movie.poster

            const filmTitle = document.querySelector(".movie-title")
            filmTitle.textContent = movie.title

            const runTime = document.querySelector(".movie-runtime")
            runTime.textContent = `Runtime: ${movie.runtime} minutes`

            const showTime = document.querySelector(".movie-showtime")
            showTime.textContent = `Showtime: ${movie.showtime}`
            
            const availTickets = document.querySelector(".movie-available-tickets")
            availTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`
        });
}


