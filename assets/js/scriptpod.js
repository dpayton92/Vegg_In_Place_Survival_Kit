
//queryURL used to query the API
//https://cors-anywhere.herokuapp.com/


//var queryURL = "https://listen-api.listennotes.com/api/v2/search?q=Hidden%20Brain&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0";
//object to contain API call's query parameters and set API key
var headers = {
    "X-ListenAPI-key": "5c02a61e371a4e1fbb549aab65c3f07b",
};

// var parameters = {
//     id: 0,
//     explicit: 0,
//     epiLength: "",
// }
var id = "";
var explicit = "";
var epiLength = "";
var userInput = "";
console.log(id);

// var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=sort_by_date=0&type=episode&offset=0&" + epiLength + "&genre_ids=" + id + "&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=" + explicit;



function generateResults() {
    console.log(queryUrl);
    // var encodedUrl = encodeURIComponent(queryUrl);
    // $.ajax({
    //     type: 'GET',
    //     contentType: 'application/json',
    //     url: 'https://corsbridge2.herokuapp.com/' + encodedUrl,
    //     headers: headers,
    //     success: function (data) {
    //         console.log(data);
    //     }
    // })
};




function buildQueryURL(id, explicit, epiLength, userInput) {

    var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_max=30&genre_ids=" + id + "&language=Spanish&safe_mode=0";

    //console.log(queryUrl);
    displayPodcastInfo(queryUrl);
};
function displayPodcastInfo(queryUrl) {

    //console.log("amazing things will happen");
    // var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=sort_by_date=0&type=episode&offset=0&" + epiLength + "&genre_ids=" + id + "&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=" + explicit;


    console.log(queryUrl);
    // Creates AJAX call for the specific button being clicked
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'X-ListenAPI-Key': '5c02a61e371a4e1fbb549aab65c3f07b',
        }
    }).then(function (response) {

        console.log(response);

        //create a function that takes the response and sets display parameters

        // Creates a div to display the podcast info
        var podcastResultsDiv = $("<div class = 'podcastResults'>");
        // Retrieves the title
        var podTitle = response.title;
        // Creates an element to have the description displayed
        var titleDisplay = $("<p>").text("Title: " + podTitle);
        // Displays the description
        podcastResultsDiv.append(titleDisplay);


        // Retrieves the description Data
        var podDescript = response.description;
        // Creates an element to have the description displayed
        var descrDisplay = $("<p>").text("Description: " + podDescript);
        // Displays the description
        podcastResultsDiv.append(descrDisplay);

        // Retrieves the total number of episodes in series
        var numbOfEpis = response.total_episodes;
        // Creates an element to hold the episode number in series
        var epiDisplay = $("<p>").text("Number of episodes in series: " + numbOfEpis);
        //displays the episode numbers
        podcastResultsDiv.append(epiDisplay);
        //console.log(response.total_episodes);

        //url for the image
        var podimgURL = response.thumbnail;
        // Creates an element to hold the podcast thumbnail image
        var podThumbnail = $("<img>").attr("src", podimgURL);
        // Appends the podcast thumbnail image
        podcastResultsDiv.append(podThumbnail);
        // Displays podcast info for 3 podcasts 
        //create for loop? 
    });


}
//displayPodcastInfo();


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
    id = "99";
    buildQueryURL(id);
    //displayPodcastInfo(id);

});
//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    console.log("comedy pod");
    id = "133";
    displayPodcastInfo(id);

});
//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    console.log("science pod");
    parameters.id = 107;

});
//technology selector button
$("#techPod").on("click", function (event) {
    event.preventDefault();
    console.log("tech pod");
    parameters.id = 127;

});
//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    console.log("crime pod");
    parameters.id = 135;

});
//business selector button
$("#busPod").on("click", function (event) {
    event.preventDefault();
    console.log("bizness pod");
    id = "93";
    displayPodcastInfo(id);

});

//less than 5 episodes in a series
$("#epiUnder30").on("click", function (event) {
    event.preventDefault();
    epiLength = "len_max=30";

});
//more than 5 episodes in a series
$("#epiOver30").on("click", function (event) {
    event.preventDefault();
    console.log("more than 5");

});

//explicit content YES
$("#yesExplicit").on("click", function (event) {
    event.preventDefault();
    explicit = "0";
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
    generateResults();

});

//displayPodcastInfo();
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", "#podGenerate", displayPodcastInfo(queryUrl));















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

