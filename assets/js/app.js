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

    // Adds a class to model to display it
    $(".modal").addClass("is-active");

    // Removes class to close Modal
    closeModal();

    // Joke API Url
    var queryUrl = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?type=single?blacklistFlags=nsfw+racist+sexist+religious+political"

    // Code to work with API
    $.ajax({
        url: queryUrl,
        method: "get"
    }).then(function (response) {

        console.log(response)
    });

    // Code to close the modal if the the x or background is clicked
    // if ()
});
















// ——————————————————————————————————————————————————
// ——————————————————————————————————————————————————
