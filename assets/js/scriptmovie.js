



var movieID = "";

function buildQueryURL(headers) {
	var api_key = "d53acf2eaed1d96d8371a0a66bf0bb3c";
	var queryUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&language=en-US&with_genres="  + movieID;
	displayMovieInfo(queryUrl);
	console.log(movieID)
};
function displayMovieInfo(queryUrl) {

	console.log(queryUrl);

	$.ajax({
		url: queryUrl,
		method: "GET",
	}).then(function (response) {
		console.log(response)
		var movieDis = $("#displayMovieView");
	

		for (var movieArr = 0; movieArr < 3; movieArr++) {

// display movie titles
			var movieResultsDiv = $("<div class = 'movieView'>");
			var movieTitle = response.results[movieArr].original_title;
			var titleDisplay = $("<h1>").text("Title: " + movieTitle);
			
			movieResultsDiv.append(titleDisplay);
			movieDis.append(movieResultsDiv);



			var movieDescript = response.results[movieArr].overview;
			var descrDisplay = $("<p>").text("Overview: " + movieDescript);

			movieResultsDiv.append(descrDisplay);
		
// display image of movie
			var baseURL = "https://image.tmdb.org/t/p/w500";
			var movieImgURL = response.results[movieArr].poster_path;					
			var comboURL = baseURL + movieImgURL;
			var movieThumbnail = $("<img>").attr("src", comboURL);
			movieResultsDiv.append(movieThumbnail);
			console.log(comboURL)
			console.log(movieImgURL)
			

		}
	});


}

// event listener for each genre selector

$("#movieBtn").on("click", function (event) {
	event.preventDefault();
	$("#mediaSelectorCard").hide();
	$("#movieCard").removeClass().addClass(".display-section .container");
});

$("#movieAction").on("click", function (event) {
	event.preventDefault();
	movieID = "28";
});

$("#movieComedy").on("click", function (event) {
	event.preventDefault();
	movieID = "35";
});


$("#movieDrama").on("click", function (event) {
	event.preventDefault();
	movieID = "18";
});


$("movieHorror").on("click", function (event) {
	event.preventDefault();
	movieID = "27";
});

$("#movieGenerate").on("click", function (event) {
	event.preventDefault();
	buildQueryURL(movieID);
	
});

$(document).on("click", "#movieGenerate", movieID);


	






