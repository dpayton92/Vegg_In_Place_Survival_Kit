# Vegg_In_Place_Survival_Kit

# Objective 
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


## Movie API
When the user clicks the movie card they are presented with 4 genres to choose from. The API used for this movie generator is **[The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction)** The user will select a genre, click generate and a dynamically created page presenting 3 movie options within that genre will be displayed with the title, an overview, and a poster image. 

![Movie API Demo](./assets/img/movieexample.gif)


## Podcast API
Clicking on the 'Podcast' card brings the user to a page where selections are made. The user will enter a topic to be searched, select a genre, episode length, and whether to include explicit content or not. These search parameters are then requested from the **[Listen Notes API](https://listennotes.com/api/)**. 

Upon the user clicking the generate button, a dynamically created page will display three podcast results ordered by date. The results will display a title, a description cut to 400 words with ellipses at the end. The length of the audio in minutes is displayed, a thumbnail image of the podcast series, and a clickable button that will bring the user to the listennotes page to listen to the generated podcast. 

The example below shows a user selecting the podcast card, entering a search topic and then selecting a genre, audio length, and explicit choice- the demo shows that the user may click multiple buttons, but the last highlighted is what will be requested from the API. 

![Podcast API Demo](./assets/img/podcastexample.gif)

## Game API
When the 'Games' card is clicked, an HTML page is dynamically displayed with options between choosing a platform or a genre. The game database API used is **[RAWG game API](https://rawg.io/)**. When the selection is made, a dynamically generated results page appears with the top 6 games. 

![Game API Demo](./assets/img/game-API-demo.gif)



