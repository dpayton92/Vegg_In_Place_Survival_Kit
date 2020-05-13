// Choose a media option
$("#gamesBtn").on("click", function (event) {
    // Prevent default so when page is refreshed the event remains
    event.preventDefault();
    // Hide media selector panel
    $("#mediaSelectorCard").hide();
    // Shows Game card
    $("#gameCard").removeClass("is-hidden");

});

// AJAX call for XBox Results
function xboxResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/platforms",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        // Selecting section HTML to append other tags into
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("XBox One");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        // Grab image and assign an attribute of source
        var imgURL = response.results[3].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        // Creating an ordered list
        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        // For loop to create list items with information being called from API
        for (i = 0; i < 6; i++) {
            var listItem = $("<li>").text(response.results[3].games[i].name);
            orderList.append(listItem);
        }
    });
}

// On xbox button click
$("#xboxPlatform").on("click", function (e) {
    // Prevent from refreshing page
    e.preventDefault();
    xboxResults();
    // Hide game card options
    $("#gameCard").addClass("is-hidden");

});

//------------------------------------------------------------------------------------------

function pcResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/platforms",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("PC");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[0].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[0].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#pcPlatform").on("click", function (e) {
    e.preventDefault();
    pcResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function nintendoResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/platforms",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Nintendo Switch");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[5].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[5].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#nintendoPlatform").on("click", function (e) {
    e.preventDefault();
    nintendoResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function playstationResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/platforms",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("PlayStation 5");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[1].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[1].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#playstationPlatform").on("click", function (e) {
    e.preventDefault();
    playstationResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function actionGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Action");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[0].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[0].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#actionGame").on("click", function (e) {
    e.preventDefault();
    actionGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function sportsGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Sports");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[12].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[12].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#sportsGame").on("click", function (e) {
    e.preventDefault();
    sportsGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function rpgGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("RPG");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[3].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[3].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#rpgGame").on("click", function (e) {
    e.preventDefault();
    rpgGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function puzzleGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Puzzle");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[9].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[9].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#puzzleGame").on("click", function (e) {
    e.preventDefault();
    puzzleGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function familyGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Family");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[14].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[14].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#familyGame").on("click", function (e) {
    e.preventDefault();
    familyGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function strategyGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Strategy");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[5].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[5].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#strategyGame").on("click", function (e) {
    e.preventDefault();
    strategyGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function racingGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Racing");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[11].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[11].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#racingGame").on("click", function (e) {
    e.preventDefault();
    racingGameResults();
    $("#gameCard").addClass("is-hidden");
});

//--------------------------------------------------------------------------------------------------------

function fightingGameResults() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "a123fe406bmsh1ac5a15cbd84ba7p16287ejsnbb685c6dd300"
        }
    }
    $.ajax(settings).done(function (response) {
        var gameView = $("#game-view");
        var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
        gameView.append(hOne);

        var divOne = $("<div class='selector-container container'>");
        gameView.append(divOne);

        var divTwo = $("<div class='columns'>");
        divOne.append(divTwo);

        var divThree = $("<div class='column'>");
        divTwo.append(divThree);

        var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
        divThree.append(hTwo);

        var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Fighting");
        divThree.append(hThree);

        var divFour = $("<div class='columns is-mobile'>");
        divThree.append(divFour);

        var divFive = $("<div class='column'>");
        divFour.append(divFive);

        var imgURL = response.results[15].image_background;
        var imgTag = $("<img>").attr("src", imgURL);
        divFive.append(imgTag);

        var divSix = $("<div class='columns is-mobile container'>");
        divThree.append(divSix);

        var orderList = $("<ol type='1' class='game-list is-size-5'>");
        divSix.append(orderList);

        for (i = 0; i < 6; i++) {

            var listItem = $("<li>").text(response.results[15].games[i].name);
            orderList.append(listItem);
        }
    });
}
$("#fightingGame").on("click", function (e) {
    e.preventDefault();
    fightingGameResults();
    $("#gameCard").addClass("is-hidden");
});




// HTML with <sectionclass="display-section container" id="game-view">
// var gameView = $("#game-view");

// var hOne = $("<h1 class='title is-1 has-text-centered'>").text("Video Games");
// gameView.append(hOne);

// var divOne = $("<div class='selector-container container'>");
// gameView.append(divOne);

// var divTwo = $("<div class='columns'>");
// divOne.append(divTwo);

// var divThree = $("<div class='column'>");
// divTwo.append(divThree);

// var hTwo = $("<h4 class='title is-size-4 has-text-centered'>").text("Here are your results, enjoy!");
// divThree.append(hTwo);

// var hThree = $("<h2 class='title is-2 has-text-centered'>").text("Action");
// divThree.append(hThree);

// var divFour = $("<div class='columns is-mobile'>");
// divThree.append(divFour);

// var divFive = $("<div class='column'>");
// divFour.append(divFive);

// var imgURL = response.results[3].image_background;
// var imgTag = $("<img>").attr("src", imgURL);
// divFive.append(imgTag);

// var divSix = $("<div class='columns is-mobile container'>");
// divThree.append(divSix);

// var orderList = $("<ol type='1' class='game-list is-size-5'>");
// divSix.append(orderList);

// for (i = 0; i < 6; i++) {

//     var listItem = $("<li>").text(response.results[2].games[i].name);
//     orderList.append(listItem);
// }
