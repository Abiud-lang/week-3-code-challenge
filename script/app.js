const url = 'https://week-3-challenge-sigma.vercel.app/films';

function createAnElement(element) {
    return document.createElement(element);
}

function addText(element, text) {
    element.innerText = text;
}

function appendChild(child, parent) {
    parent.appendChild(child);
}

function select(selector) {
    return document.querySelector(selector);
}

function listen(element, event, callback) {
    element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
    element.setAttribute(attribute, content);
}

listen(document, 'DOMContentLoaded', () => {
    MoviesTitle();
    MovieDetails(1);
});

function MoviesTitle() {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            const movieList = select('.films');
            movies.forEach(movie => {
                const series = createAnElement('li');
                addText(series, movie.title);
                listen(series, 'click', () => MovieDetails(movie.id));
                appendChild(series, movieList);
            });
        });
}

function MovieDetails(movieId) {
    fetch(`${url}/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            const moviePoster = select('.movie-poster');
            addAttribute(moviePoster, 'src', movie.poster);

            const filmDes = select('.movie-description');
            addText(filmDes, movie.description);

            const filmTitle = select('.movie-title');
            addText(filmTitle, movie.title);

            const runTime = select('.movie-runtime');
            addText(runTime, `Runtime: ${movie.runtime} minutes`);

            const showTime = select('.movie-showtime');
            addText(showTime, `Showtime: ${movie.showtime}`);
            
            const availTickets = select('.movie-available-tickets');
            let availableTickets = movie.capacity - movie.tickets_sold;
            addText(availTickets, `Available Tickets: ${availableTickets}`);

            const buyTicket = select('.buy-ticket');
            listen(buyTicket, 'click', function() {
                if (availableTickets > 0) {
                    availableTickets -= 1;
                    addText(availTickets, `Available Tickets: ${availableTickets}`);
                    if (availableTickets === 0) {
                        addText(buyTicket, 'Sold Out');
                    }
                } else {
                    addText(buyTicket, 'Buy ticket');
                }
            });
        });
}
