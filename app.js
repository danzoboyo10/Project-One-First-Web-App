const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": "625c9ad15bmsh632c27ff42b138bp101e9cjsn25f93b4e0c16"
	}
};

//Element References JQuery Variables
const $bodyPart = $('#bodyPart')
const $equipment = $('#equipment')
const $gifUrl = $('#gifUrl')
const $id = $('#exerciseId')
const $exerName = $('#exerName')
const muscleTarg = $('#muscleTarg')
// bodyPart: "back"
// equipment: "barbell"
// gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0027.gif"
// id: "0027"
// name: "barbell bent over row"
// target: "upper back"

$.ajax(settings).done(function (data) {
	console.log(data);
});

function displayExercises() {
    // $title.text(data.Title)
    // $year.text(data.Year)
    // $rating.text(data.Rated)
    // $actors.text(data.Actors)
    // $('main').append(`<img src="${data.Poster}"/>`)
    bodyPart: "back"
    equipment: "barbell"
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0027.gif"
    id: "0027"
    name: "barbell bent over row"
    target: "upper back"
}