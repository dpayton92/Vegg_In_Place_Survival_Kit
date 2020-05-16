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

//function will take in the parameters object to build the queryUrl
function buildQueryURL(podData) {
    //the queryUrl builds the ajax url with parameters 
    var queryUrl = "https://listen-api.listennotes.com/api/v2/search?q=%22" + podData.userInput + "%22&sort_by_date=1&type=episode&offset=0&" + podData.epiLength + "&genre_ids=" + podData.id + "&only_in=title%2Cdescription&language=English&safe_mode=" + podData.explicit;

    //pushes the built queryUrl into the displayPodcastInfo function
    displayPodcastInfo(queryUrl);
};

//function creates ajax call with header and queryUrl then makes promise for response and displays results
function displayPodcastInfo(queryUrl) {

    // Creates AJAX call includes header with API key
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
            //appending podcastResultsDiv to the displayPodResults id in HTML
            podDis.append(podcastResultsDiv);

            // Retrieves the title
            var podTitle = response.results[podArray].title_original;
            // Creates an element to have the title displayed
            var titleDisplay = $("<h2 class = 'title podcast-color has-text-centered as-text-weight-bold'>").text(podTitle);
            // Displays the title
            podcastResultsDiv.append(titleDisplay);

            // creates variable for response, Retrieves the description Data
            var podDescript = response.results[podArray].description_original;
            //cut movie description display down to 400 characters
            podDescript = podDescript.substring(0, 400);
            // Creates an element to have the description displayed
            var descrDisplay = $("<p class = 'title is-6 has-text-weight-semibold'>").text("Description: " + `${podDescript}...`);
            // Displays the description
            podcastResultsDiv.append(descrDisplay);

            //length of episode cut to two decimal places
            var audioMinutes = (((response.results[podArray].audio_length_sec) / 60).toFixed(2));
            // to display the length in minutes, not seconds as shown in API response
            var audioLength = audioMinutes;
            // Creates an element to hold the episode length in series
            var epiDisplay = $("<p class = 'has-text-weight-semibold'>").text("Audio Length: " + audioLength + " minutes");
            //displays the episode length
            podcastResultsDiv.append(epiDisplay);

            //url for the image
            var podimgURL = response.results[podArray].thumbnail;
            // Creates an element to hold the podcast thumbnail image
            var podThumbnail = $("<img class = 'pod-img'>").attr("src", podimgURL);
            // Appends the podcast thumbnail image
            podcastResultsDiv.append(podThumbnail);

            //grab url for access to podcast link
            var accessLink = response.results[podArray].listennotes_url;
            //create element to hold podcast link
            var thelink = $('<a>', {
                href: accessLink
            }).appendTo(podcastResultsDiv);
            //append access link to card
            podcastResultsDiv.append(thelink);

            //Create a button to listen to podcast
            var btn = $("<button id='podListen' class='button is-fullwidth is-rounded podcast__generate-btn'>").text("Click Here to Listen");
            thelink.append(btn);

        }
    });
}

//user input textbox 
function inputFunction() {
    //grabs text to put into parameters object
    parameters.userInput = document.getElementById("myInput").value;

};

//event listener for podcast button from main page
$("#podcastBtn").on("click", function (event) {
    //prevent default so when page is refreshed the event remains
    event.preventDefault();
    //hide media selector panel
    $("#mediaSelectorCard").hide();
    //go to podcast card - unhides it
    $("#podCard").removeClass("is-hidden");

});

//function allows buttons to be clicked multiple times, last highlighted button is what passes the parameters
function persistToggleGenres(thisBtn) {
    //adding css class to button to make color persist upon click
    $(thisBtn).addClass("podcast__select-btn");
    // remove active from the others
    $(".podcast__select-btn").not(thisBtn).removeClass('active');
    // toggle current clicked element
    $(thisBtn).toggleClass('active');
}

//news selector button
$("#newsPod").on("click", function (event) {
    event.preventDefault();
    //set value of news id (99) to object id key
    parameters.id = "99";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);
});

//comedy selector button
$("#comedyPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "133";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);

});

//science selector button
$("#sciencePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "107";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);

});

//technology selector button
$("#techPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "127";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);

});

//True Crime selector button
$("#crimePod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "135";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);

});

//business selector button
$("#busPod").on("click", function (event) {
    event.preventDefault();
    parameters.id = "93";
    //function to make buttons toggle and persist color
    persistToggleGenres(this);

});

//function allows buttons to be clicked multiple times, last highlighted button is what passes the parameters
function persistToggleEpi(thisBtn) {
    //adding css class to button to make color persist upon click
    $(thisBtn).addClass("epiSelect-btn");
    // remove active from the others
    $(".epiSelect-btn").not(thisBtn).removeClass('active');
    // toggle current clicked element
    $(thisBtn).toggleClass('active');
}

//episode is less than 30 minutes
$("#epiUnder30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=10&len_max=30";
    //function to toggle/persist button color
    persistToggleEpi(this);

});

//episode is longer than 30 minutes
$("#epiOver30").on("click", function (event) {
    event.preventDefault();
    parameters.epiLength = "len_min=30";
    //function to toggle/persist button color
    persistToggleEpi(this);

});

//function allows buttons to be clicked multiple times, last highlighted button is what passes the parameters
function persistToggleExplicit(thisBtn) {
    //adding css class to button to make color persist upon click
    $(thisBtn).addClass("explSelect-btn");
    // remove active from the others
    $(".explSelect-btn").not(thisBtn).removeClass('active');
    // toggle current clicked element
    $(thisBtn).toggleClass('active');
}
//explicit content YES
$("#yesExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "0";
    //function to persist/toggle color on buttons
    persistToggleExplicit(this);


});

//explicit content please NO
$("#noExplicit").on("click", function (event) {
    event.preventDefault();
    parameters.explicit = "1";
    //function to persist/toggle color on buttons
    persistToggleExplicit(this);

});

//generate results onclick function 
$("#podGenerate").on("click", function (event) {
    event.preventDefault();
    //passes the parameters into the query builder function
    buildQueryURL(parameters);
    //hides the podcast card
    $("#podCard").hide();
    //go to podcast results card - unhides it
    $("#resultsPage").removeClass("is-hidden");

});
