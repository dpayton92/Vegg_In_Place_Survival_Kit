# Vegg_In_Place_Survival_Kit

# Obejctive 
Vegg-In-Place is an entertainment discovery website that generates a movie, video game or podcast—based on a variety customizable presets. Just looking for a quick laugh? Jokes can be generated at will from the navbar.

**[View Deployed Site](dpayton92.github.io/Vegg_In_Place_Survival_Kit)**


## User Story 
**When** I am bored at home, I want a quick way to find new media to relax to.

**So** that when I input my preferences a random podcast, movie, game or joke is returned each time.


## Tech Used
* Figma
* Trello 
* Bulma 
* HTML
* CSS
* Javascript 
* JQuery
* Listen Notes API
* TMDB API
* RAWG API
* Official Joke API


## Joke API
Clicking on the Joke button in the navbar opens a modal that features a randomly generated joke. Jokes are supplied by David Katz's **[Official Joke API](https://github.com/15Dkatz/official_joke_api)**. Each time the modal is opened a joke category, setup and punchline is generated with JavaScript and posted on the HTML page dynamically. 
![Joke Modal Demo](./assets/img/joke-modal-demo.gif)


## Game API
When the 'Games' card is clicked, an HTML page is dynamically displayed with options between choosing a platform or a genre. The game database API used is **[RAWG game API](https://rawg.io/)**. When the selection is made, a dynamically generated results page appears with the top 6 games. 

![Game API Demo](./assets/img/game-API-demo.gif)


