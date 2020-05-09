console.log("hello world")

// ——————————————————————————————————————————————————
// ——————————————————————————————————————————————————

// Closes model on background or close button click
function closeModal() {
    $("#modalClose").on("click", function () {
        $(".modal").removeClass("is-active");
    });
    $(".modal-background").on("click", function () {
        $(".modal").removeClass("is-active");
    });
};

// Event Lister For Joke Button in Nav Bar
$("#jokeBtn").on("click", function () {

    // Clears last category text
    $("#jokeCategory").text('');

    // Clears last joke text
    $("#jokeContent").text('');

    // Adds a is-active class to model which displays it
    $(".modal").addClass("is-active");

    // Removes class to close Modal
    closeModal();

    // Joke API Url
    var queryUrl = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?type=single?blacklistFlags=nsfw+racist+sexist+religious+political"

    // Joke API 

    // Code to work with API
    $.ajax({
        url: queryUrl,
        method: "get"
    }).then(function (response) {

        // Dynamically adds the category and joke text  
        $("#jokeCategory").text(response.category);
        $("#jokeContent").text(response.joke);
    });
});

// ——————————————————————————————————————————————————
// ——————————————————————————————————————————————————
