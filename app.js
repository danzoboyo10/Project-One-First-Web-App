
//Variables 
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
const $equipment = $('#equipment')
const $gifUrl = $('#exerGifUrl')
const $exerName = $('#exerName')
const $muscleTarg = $('#muscleTarg')
const $daysOfWeek = $('.daysOfWeek')



//EVENT LISTENERS
$daysOfWeek.on("click", handleGetData)


//FUNCTIONS
function handleGetData(event) {
    event.preventDefault()


$.ajax(settings).then(function (data) {
    
    console.log(data);
    $equipment.text(data.equipment)
    $gifUrl.text(data.gifUrl)
    $exerName.text(data.exerName)
    $muscleTarg.text(data.muscleTarg)
}, 
 function (error) {
    console.log('something is wrong')
    console.log(error)
})


}

