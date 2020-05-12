
//object to contain API call's query parameters and set API key
var headers = {
    "X-ListenAPI-key": "5c02a61e371a4e1fbb549aab65c3f07b",
};

var parameters = {
    id: "",

};


var explicit = "";
var epiLength = "";
var userInput;




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




function buildQueryURL(podData) {
    console.log(podData);
    var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_max=30&genre_ids=" + podData.id + "&language=English&safe_mode=0";

    //console.log(queryUrl);
    displayPodcastInfo(queryUrl);
};
function displayPodcastInfo(queryUrl) {

    //console.log(queryUrl);
    // Creates AJAX call for the specific button being clicked
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'X-ListenAPI-Key': '5c02a61e371a4e1fbb549aab65c3f07b',
        }
    }).then(function (response) {

        console.log(response);
        var podDis = $("#displayPodResults");
        //create a function that takes the response and sets display parameters
        //var podArray = 0;
        for (var podArray = 0; podArray < 3; podArray++) {


            // Creates a div to display the podcast info
            var podcastResultsDiv = $("<div class = 'podcastResults'>");
            // Retrieves the title
            var podTitle = response.results[podArray].title_original;
            // Creates an element to have the description displayed
            var titleDisplay = $("<p>").text("Title: " + podTitle);
            // Displays the description
            podcastResultsDiv.append(titleDisplay);
            podDis.append(podcastResultsDiv);



            // Retrieves the description Data
            var podDescript = response.results[podArray].description_original;
            // Creates an element to have the description displayed
            var descrDisplay = $("<p>").text("Description: " + podDescript);
            // Displays the description
            podcastResultsDiv.append(descrDisplay);
            podDis.append(descrDisplay);
            var audioMinutes = (((response.results[0].audio_length_sec) / 60).toFixed(2));
            // Retrieves the total number of episodes in series
            var audioLength = audioMinutes;
            // Creates an element to hold the episode number in series
            var epiDisplay = $("<p>").text("Audio Length: " + audioLength + " minutes");
            //displays the episode numbers
            podcastResultsDiv.append(epiDisplay);
            //console.log(response.total_episodes);

            //url for the image
            var podimgURL = response.results[podArray].thumbnail;
            // Creates an element to hold the podcast thumbnail image
            var podThumbnail = $("<img>").attr("src", podimgURL);
            // Appends the podcast thumbnail image
            podcastResultsDiv.append(podThumbnail);
            // Displays podcast info for 3 podcasts 
            //create for loop? 
        }
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
    parameters.id = "99";

    //buildQueryURL(id);
    //displayPodcastInfo(id);


});
//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    console.log("comedy pod");
    id = "133";
    //buildQueryURL(id);

});
//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    console.log("science pod");
    id = "107";

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
    //generateResults();
    buildQueryURL(parameters);
});

//displayPodcastInfo();
// Adding a click event listener to generate call display function
$(document).on("click", "#podGenerate", displayPodcastInfo);















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

