
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

function buildQueryURL(podData) {

    var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=%22" + podData.userInput + "%22&sort_by_date=1&type=episode&offset=0&" + podData.epiLength + "&genre_ids=" + podData.id + "&only_in=title%2Cdescription&language=English&safe_mode=" + podData.explicit;

    displayPodcastInfo(queryUrl);
};
function displayPodcastInfo(queryUrl) {

    // Creates AJAX call for the specific button being clicked
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
            'X-ListenAPI-Key': '5c02a61e371a4e1fbb549aab65c3f07b',
        }
    }).then(function (response) {
        //variable for the dynamically created html elements to append to
        var podDis = $("#displayPodResults");

        //for loop to display top 3 results
        for (var podArray = 0; podArray < 3; podArray++) {


            // Creates a div to display the podcast info
            var podcastResultsDiv = $("<div class = 'podcastResults'>");
            // Retrieves the title
            var podTitle = response.results[podArray].title_original;
            // Creates an element to have the description displayed
            var titleDisplay = $("<p class = 'title is-5 has-text-centered'>").text("Title: " + podTitle);
            // Displays the title
            podcastResultsDiv.append(titleDisplay);
            podDis.append(podcastResultsDiv);

            // creates variable for response, Retrieves the description Data
            var podDescript = response.results[podArray].description_original;
            //cut movie description display down to 400 characters
            podDescript = podDescript.substring(0, 400);
            // Creates an element to have the description displayed
            var descrDisplay = $("<p>").text("Description: " + `${podDescript}...`);

            // Displays the description
            podcastResultsDiv.append(descrDisplay);
            podDis.append(podcastResultsDiv);

            //length of episode cut to two decimal places
            var audioMinutes = (((response.results[podArray].audio_length_sec) / 60).toFixed(2));
            // to display the length in minutes, not seconds as shown in API response
            var audioLength = audioMinutes;
            // Creates an element to hold the episode length in series
            var epiDisplay = $("<p>").text("Audio Length: " + audioLength + " minutes");
            //displays the episode length
            podcastResultsDiv.append(epiDisplay);

            //url for the image
            var podimgURL = response.results[podArray].thumbnail;
            // Creates an element to hold the podcast thumbnail image
            var podThumbnail = $("<img>").attr("src", podimgURL);
            // Appends the podcast thumbnail image
            podcastResultsDiv.append(podThumbnail);

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
    // $("#newsPod").removeClass("active");
    // $(this).addClass('active');
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
    parameters.id = "127";

});

//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "135";

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
    $("#podCard").hide();
    //go to podcast card - unhides it
    $("#resultsPage").removeClass().addClass(".display-section .container");

});

// var topic = $("<p>").text("Topic: " + (parameters.userInput));
// $("#yourSearch").append(topic);
var userGenre = $("<p>").text("Genre: " + (parameters.id));
$("#yourSearch").append(userGenre);



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

// https://api.themoviedb.org/3/discover/movie?api_key=d53acf2eaed1d96d8371a0a66bf0bb3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28


{/* <section class="display-section container" id="gameView">
            <h1 class="title is-1 has-text-centered">Video Games</h1>
            <div class="selector-container container">
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-size-4 has-text-centered">Here are your results, enjoy!</h4>
                        <h2 class="title is-2 has-text-centered">Action</h2>
                        <div class="columns is-mobile">
                            <div class="column">
                                <img src="./assets/img/xboxone-img.jpg" alt="random game">
                            </div>
                        </div>
                        <div class="columns is-mobile container">
                            <ol type="1" class="game-list is-size-5">
                                <li>Game Name</li>
                                <li>Game Name</li>
                                <li>Game Name</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}