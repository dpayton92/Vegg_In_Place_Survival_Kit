
//object to contain API call's query parameters and set API key
var headers = {
    "X-ListenAPI-key": "5c02a61e371a4e1fbb549aab65c3f07b",
};

//object of parameters to be passed into buildQueryUrl function
var parameters = {
    id: "",
    userInput: "",
    epiLength: "",
    explicit: ""

};

// function generateResults() {
//     console.log(queryUrl);
//     // var encodedUrl = encodeURIComponent(queryUrl);
//     // $.ajax({
//     //     type: 'GET',
//     //     contentType: 'application/json',
//     //     url: 'https://corsbridge2.herokuapp.com/' + encodedUrl,
//     //     headers: headers,
//     //     success: function (data) {
//     //         console.log(data);
//     //     }
//     // })
// };

function buildQueryURL(podData) {

    var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=" + podData.userInput + "&sort_by_date=1&type=episode&offset=0&" + podData.epiLength + "&genre_ids=" + podData.id + "&only_in=title%2Cdescription&language=English&safe_mode=" + podData.explicit;

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

        var podDis = $("#displayPodResults");
        //create a function that takes the response and sets display parameters

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

            // const p = document.createElement('p');
            // movie.description = movie.description.substring(0, 300);
            // p.textContent = `${movie.description}...`;

            // Displays the description
            podcastResultsDiv.append(descrDisplay);
            podDis.append(descrDisplay);
            var audioMinutes = (((response.results[podArray].audio_length_sec) / 60).toFixed(2));
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


//user input textbox 
function myFunction() {
    //grabs text to put into parameters object
    parameters.userInput = document.getElementById("myInput").value;
    // document.getElementById("yourSearch").innerHTML = "Topic: " + parameters.userInput;
    //console.log(parameters.userInput);
    // var topic = $("<p>").text("Topic: " + (parameters.userInput));
    // $("#yourSearch").append(topic);
}


//event listener for podcast button from main page

$("#podcastBtn").on("click", function (event) {
    //prevent default so when page is refreshed the event remains
    event.preventDefault();
    //hide media selector panel
    $("#mediaSelectorCard").hide();
    //go to podcast card - unhides it
    $("#podCard").removeClass().addClass(".display-section .container");

});
//news selector button
$("#newsPod").on("click", function (event) {
    event.preventDefault();
    //set value of news id (99) to object id key
    parameters.id = "99";

});

//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "133";

});

//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "107";

});

//technology selector button
$("#techPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = 127;

});

//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = 135;

});

//business selector button
$("#busPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "93";


});

//episode is less than 30 minutes
$("#epiUnder30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=10&len_max=30";

});

//episode is longer than 30 minutes
$("#epiOver30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=30";

});

//explicit content YES
$("#yesExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "0";


});

//explicit content please NO
$("#noExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "1";

});

//generate results
$("#podGenerate").on("click", function (event) {
    event.preventDefault();
    buildQueryURL(parameters);
});

// var topic = $("<p>").text("Topic: " + (parameters.userInput));
// $("#yourSearch").append(topic);
var userGenre = $("<p>").text("Genre: " + (parameters.id));
$("#yourSearch").append(userGenre);


// Adding a click event listener to generate call display function
$(document).on("click", "#podGenerate", displayPodcastInfo);

