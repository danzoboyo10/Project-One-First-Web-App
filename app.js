
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

$.ajax(settings).done(function (response) {
	console.log(response);
});


//Element References JQuery Variables
const $equipment = $('#equipment')
const $exerName = $('#exerName')
const $muscleTarg = $('#muscleTarg')
const $exerCssImage = $('#exerCssImage')
const $main = $('main')
const $form = $('form')
const $input = $(`input[type="text"]`)

const $monday = $('#Mon')
const $tuesday = $('#Tues')
const $wednesday = $('#Wednes')
const $thursday = $('#Thurs')
const $friday = $('#Frid')
const $saturday = $('#Sat')
const $sunday = $('#Sund')




//EVENT LISTENERS
$form.on('submit', handleGetData)
// $monday.on("click", handleGetData)
// $tuesday.on("click", handleGetData)
// $wednesday.on("click", handleGetData)
// $thursday.on("click", handleGetData)
// $friday.on("click", handleGetData)
// $saturday.on("click", handleGetData)
// $sunday.on("click", handleGetData)



//FUNCTIONS
function handleGetData(event) {
    event.preventDefault()
    const userInput = $input.val();


$.ajax(settings).then(function (data) {

    //if(userInput === "chest"){
        let workout = data.find((data) => data.bodyPart === userInput)
        console.log(workout)
        $equipment.html(function(){
            let equipmentName = workout.equipment
            console.log(equipmentName);  
        let equipmentEl = document.createElement("li")
        equipmentEl.innerText = equipmentName;
        $("#content1").append(equipmentEl)    
            // text(workout.equipment)
    })

        // $exerName.text(workout.exerName)
        $exerName.html(function(){
        let exerNames = workout.name
        console.log(exerNames);  
        let exerEl = document.createElement("li")
        exerEl.innerText = exerNames;
        $("#content1").append(exerEl)    
    })
        $muscleTarg.html(function(){
        let muscleTargs = workout.target
        console.log(muscleTargs);  
        let muscleTargEl = document.createElement("li")
        muscleTargEl.innerText = muscleTargs;
        $("#content1").append(muscleTargEl)    
})

        $exerCssImage.html(function(){
        let exerCssDisplay = workout.gifUrl
        console.log(exerCssDisplay);  
        let exerCssEl = document.createElement("img")
        img.src = src
        exerCssEl.innerText = exerCssDisplay;
        $("#content1").append(exerCssEl)    
})




        
        // $muscleTarg.text(workout.muscleTarg)
        // console.log($exerName)
        // $('content1').append(`<p> "${workout}"</p>`)
        // console.log(userInput)
        
    
     console.log(data);
    
   

}, 
 function (error) {
    console.log('something is wrong')
    console.log(error)
})



}




// $("#content1").append(`<img src= "$(data.gifUrl"/>`)

// let workoutImg = workout.


