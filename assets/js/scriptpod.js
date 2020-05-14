
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
            // Creates an element to have the title displayed
            var titleDisplay = $("<p class = 'title is-5 has-text-centered'>").text(podTitle);
            // Displays the title
            podcastResultsDiv.append(titleDisplay);


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
            var podThumbnail = $("<img class = pod-img>").attr("src", podimgURL);
            // Appends the podcast thumbnail image
            podcastResultsDiv.append(podThumbnail);

            //grab url for access to podcast link
            var accessLink = response.results[podArray].listennotes_url;
            var playNow = $("<p>").text("Want to listen to this now?");
            //create element to hold podcast link
            var thelink = $('<a>', {
                text: 'Click Here to Listen',
                href: accessLink
            }).appendTo(podcastResultsDiv);
            //append access link to card
            podcastResultsDiv.append(playNow, thelink);

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

    //adding css class to button to make color persist upon click
    $(this).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "133";

    //adding css class to button to make color persist upon click
    $(this).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "107";

    //adding css class to button to make color persist upon click
    $(this).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//technology selector button
$("#techPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "127";

    //adding css class to button to make color persist upon click
    $(this).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "135";

    //adding css class to button to make color persist upon click
    $(this).addClass(".podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//business selector button
$("#busPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "93";

    //adding css class to button to make color persist upon click
    $(this).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');


});

//episode is less than 30 minutes
$("#epiUnder30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=10&len_max=30";

    //adding css class to button to make color persist upon click
    $(this).addClass("epiSelect-btn");
    // remove active from the others
    $(".epiSelect-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//episode is longer than 30 minutes
$("#epiOver30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=30";

    //adding css class to button to make color persist upon click
    $(this).addClass("epiSelect-btn");
    // remove active from the others
    $(".epiSelect-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//explicit content YES
$("#yesExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "0";

    //adding css class to button to make color persist upon click
    $(this).addClass("explSelect-btn");
    // remove active from the others
    $(".explSelect-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

});

//explicit content please NO
$("#noExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "1";

    //adding css class to button to make color persist upon click
    $(this).addClass("explSelect-btn");
    // remove active from the others
    $(".explSelect-btn").not(this).removeClass('active');
    // toggle current clicked element
    $(this).toggleClass('active');

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




