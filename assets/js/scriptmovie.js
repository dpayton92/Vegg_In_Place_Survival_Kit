



var movieID = "";

function buildQueryURL(headers) {
	var api_key = "d53acf2eaed1d96d8371a0a66bf0bb3c";
	var queryUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key + "&language=en-US" + movieID;
	displayMovieInfo(queryUrl);
	console.log(movieID)
};
function displayMovieInfo(queryUrl) {

	console.log(queryUrl);

	$.ajax({
		url: queryUrl,
		method: "GET",
	}).then(function (response) {

		var movieDis = $("#displayMovieView");


		for (var movieArray = 0; movieArray < 3; movieArray++) {


			var movieResultsDiv = $("<div class = 'movieView'>");
			var movieTitle = response.results[movieArray].original_title;
			var titleDisplay = $("<p>").text("Title" + movieTitle);

			movieResultsDiv.append(titleDisplay);
			movieDis.append(movieResultsDiv);


			var movieDescript = response.results[movieArray].description_original;
			var descrDisplay = $("<p>").text("overview " + movieDescript);

			movieResultsDiv.append(descrDisplay);
			movieDis.append(descrDisplay);
			movieResultsDiv.append(epiDisplay);



			var movieimgURL = response.results[movieArray].thumbnail;
			var movieThumbnail = $("<img>").attr("src", movieimgURL);
			movieResultsDiv.append(movieThumbnail);
			console.log()
		}
	});


}



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

$(document).on("click", "#movieGenerat", displayMovieInfo);


