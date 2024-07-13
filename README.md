# Flatdango

Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater. The application fetches movie data from a local JSON server and displays movie details, including poster, title, runtime, showtime, and available tickets. Users can view a list of all movies and purchase tickets for their favorite movies.

## Table of Contents

- [Flatdango](#flatdango)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- View a list of all movies
- View details of the first movie on page load
- Click on a movie title to view its details
- Purchase tickets for a movie
- Display the number of available tickets
- Indicate when a movie is sold out

## Requirements

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager)
- [json-server](https://github.com/typicode/json-server)

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/flatdango.git
cd flatdango
Install the dependencies:
bash
Copy code
npm install -g json-server
Start the JSON server:
bash
Copy code
json-server --watch db.json
Open index.html in your web browser.
Usage
Viewing Movies:

On page load, the first movie's details are displayed, and a list of all movies is shown on the left sidebar.

Viewing Movie Details:

Click on a movie title in the sidebar to view its details in the main content area.

Purchasing Tickets:

Click the "Buy Ticket" button to purchase a ticket for the currently displayed movie. The number of available tickets will decrease accordingly. If no tickets are available, the button will display "Sold Out".

Project Structure
Copy code
flatdango/
├── db.json
├── index.html
├── script.js
├── styles.css
└── README.md
API Endpoints
Get all films:

bash
Copy code
GET /films
Example response:

json
Copy code
[
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    "id": "2",
    "title": "Manos: The Hands Of Fate",
    "runtime": "118",
    "capacity": 50,
    "showtime": "06:45PM",
    "tickets_sold": 44,
    "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  }
]
Get a single film by ID:

bash
Copy code
GET /films/:id
Example response:

json
Copy code
{
  "id": "1",
  "title": "The Giant Gila Monster",
  "runtime": "108",
  "capacity": 30,
  "showtime": "04:00PM",
  "tickets_sold": 27,
  "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
  "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}
Screenshots
Include screenshots of your application here to give users a visual overview of the app.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin my-feature-branch
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

