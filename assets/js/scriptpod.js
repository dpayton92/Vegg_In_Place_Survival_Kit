
//queryURL used to query the API

//var queryURL = "https://listen-api.listennotes.com/api/v2/search?q=Hidden%20Brain&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0";
//object to contain API call's query parameters and set API key
var queryParams = {
    "X-ListenAPI-key": "5c02a61e371a4e1fbb549aab65c3f07b",
};
var queryUrl = "https://listen-api.listennotes.com/api/v2";

var parameters = {
    id: 0,
    explicit: 0,
    epiNumb: 0
}
// var unirest = require('unirest');
// unirest
//     .post('http://mockbin.com/request')
//     .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
//     .send({ "parameter": 23, "foo": "bar" })
//     .then((response) => {
//         console.log(response.body)
//     });

// const unirest = require('unirest');

// const response = await unirest.get('https://listen-api.listennotes.com/api/v2/search?q=coronavirus&sort_by_date=0&offset=0&len_min=10&len_max=30&genre_ids=9&published_after=0&language=English&safe_mode=1')
//     .header('X-ListenAPI-Key', '5c02a61e371a4e1fbb549aab65c3f07b')
// response.toJSON();
//var queryUrl = "https://www.numbeo.com/api/city_prices?api_key=4n7468zewaj81z&query=Belgrade";

var encodedUrl = encodeURIComponent(queryUrl);
$.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: 'https://corsbridge.herokuapp.com/' + encodedUrl,
    success: function (data) {
        console.log(data);
    }
});


// function buildQueryURL() {

//     queryParams.q = $(".button")
//         .val();
//     var genreSearch = "genre_id=" + parameters.id;
//     console.log(queryURL + $.param(queryParams) + genreSearch);
//     return queryURL + $.param(queryParams) + genreSearch;


// };
function displayPodcastInfo() {

    //var queryURL = 
    //var queryResult = queryURL + queryParams["api-key"];

    // Creates AJAX call for the specific button being clicked
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: { 'X-ListenAPI-Key': '5c02a61e371a4e1fbb549aab65c3f07b' }
    }).then(function (response) {

        //create a function that takes the response and sets display parameters
        console.log(response);
        // Creates a div to display the podcast info
        // Retrieves the description Data
        // Creates an element to have the description displayed
        // Displays the description
        // Retrieves the episode number in series
        // Creates an element to hold the episode number in series
        // Displays the episode number in series
        // Retrieves the title
        // Creates an element to hold the title
        // Appends the title
        // Creates an element to hold the podcast thumbnail image
        // Appends the podcast thumbnail image
        // Displays podcast info for 3 podcasts 
    });

}
displayPodcastInfo();

//event listener for podcast button from main page

$("#podcastBtn").on("click", function (event) {
    //prevent default so when page is refreshed the event remains
    event.preventDefault();
    //hide media selector panel
    $("#mediaSelectorCard").hide();
    //go to podcast card - unhides it
    $("#podCard").removeClass().addClass(".display-section");

});
//news selector button
$("#newsPod").on("click", function (event) {
    event.preventDefault();
    //set value of news id (99) to object id key
    parameters.id = 99;
    buildQueryURL();

});
//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    console.log("comedy pod");

});
//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    console.log("science pod");

});
//technology selector button
$("#techPod").on("click", function (event) {
    event.preventDefault();
    console.log("tech pod");

});
//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    console.log("crime pod");

});
//business selector button
$("#busPod").on("click", function (event) {
    event.preventDefault();
    console.log("bizness pod");

});

//less than 5 episodes in a series
$("#epiLess5").on("click", function (event) {
    event.preventDefault();
    console.log("less than 5");

});
//more than 5 episodes in a series
$("#epiMore5").on("click", function (event) {
    event.preventDefault();
    console.log("more than 5");

});

//explicit content YES
$("#yesExplicit").on("click", function (event) {
    event.preventDefault();
    console.log("YES dirty");

});
//explicit content please NO
$("#noExplicit").on("click", function (event) {
    event.preventDefault();
    console.log("no thank you, dirty");

});
//generate results
$("#podGenerate").on("click", function (event) {
    event.preventDefault();
    console.log("your results");

});


















//Base URL: https://listen-api.listennotes.com/api/v2








// Listen Notes API

// Must display logo on at least one page. 

// Applications using the Listen API must not pre-fetch, cache, index, or store any content on the server side.
// Note that the id and the pub_date (e.g., latest_pub_date_ms, pub_date_ms...) of a podcast or an episode are exempt from the caching restriction.

// GET/podcasts/search?q=bitcoin&only_in=title%2Cdescription&language=French

// podcasts/4d3fe717742d4963a85562e9f84d8c79?q=bitcoin&only_in=title&language=French

// genres?top_level_only=0
// genres?top_level_only=0

// search/?q=bitcoin&type=podcast&only_in=title&language=French

