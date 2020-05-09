//Base URL: https://listen-api.listennotes.com/api/v2


//queryURL used to query the API
var queryURL = "https://listen-api.listennotes.com/api/v2";

//object to contain API call's query parameters and set API key
var queryParams = { "api-key": "c02a61e371a4e1fbb549aab65c3f07b" };

//grab text user typed into search input, add to queryParams object    
queryParams.q = $("#search-term")
    .val()
    .trim();

function displayMovieInfo() {

    var podcast = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Creates a div to hold the movie
        // Retrieves the Rating Data
        // Creates an element to have the rating displayed
        // Displays the rating
        // Retrieves the release year
        // Creates an element to hold the release year
        // Displays the release year
        // Retrieves the plot
        // Creates an element to hold the plot
        // Appends the plot
        // Creates an element to hold the image
        // Appends the image
        // Puts the entire Movie above the previous movies.
    });

}
//create variables for each criteria search = ""
//create onclick functions
//prevent default
//append search criteria into url
//generate button function spits out the complete url and show reults in new card
//create dynamic result page