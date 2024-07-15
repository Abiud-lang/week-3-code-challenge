const url = 'https://week-3-challenge-sigma.vercel.app/films'

function createAnElement(element){
    return document.createElement(element)
}

function addText(element, text) {
    return (element.innerText = text)

    
}
function appendChild(child, parent) {
    return parent.appendChild(child)

}

function select(selector) {
    return document.querySelector(selector)
    
}

function listen(element, event, callback) {
    return element.addEventListener(event, callback);

    
}

function addAttribute(element,attribute, content) {
 return element.setAttribute(attribute, content)   
}
listen(document, 'DOMContentLoaded', () => {
    MoviesTitle(url);
    MovieDetails(1);
});


function MoviesTitle() {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            const movieList = select(".films");
            movies.map(movie => {
                const series = createAnElement("li");
                addText(series, movie.title);
                listen(series, "click", () => MovieDetails(movie.id));
                appendChild(series, movieList);
            });
        });
}

function MovieDetails(movieId) {
    fetch(`${url}/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            const moviePoster = select(".movie-poster");
            addAttribute(moviePoster, "src", movie.poster);

            const filmDes = select(".movie-description");
            addText(filmDes, movie.description);

            const filmTitle = select(".movie-title");
            addText(filmTitle, movie.title);

            const runTime = select(".movie-runtime");
            addText(runTime, `Runtime: ${movie.runtime} minutes`);

            const showTime = select(".movie-showtime");
            addText(showTime, `Showtime: ${movie.showtime}`);
            
            const availTickets = select(".movie-available-tickets");
            addText(availTickets, `Available Tickets: ${movie.capacity - movie.tickets_sold}`);

        }
    )}


    buyTicket.listen('click', function(){
        let remTickets = select('.buy-ticket')
        .addText()
        
        if(remTickets > 0){
            select('.movie-available-tickets')
            .addText  (remTickets-1)
        }
        else if((remTickets === 0)){
            buyTicket.addText ('Sold Out')
        }
})
    

            
           