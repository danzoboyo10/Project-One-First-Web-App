
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

const $monday = $('#mon')
const $tuesday = $('#tues')
const $wednesday = $('#wednes')
const $thursday = $('#thurs')
const $friday = $('#frid')
const $saturday = $('#sat')
const $sunday = $('#sund')

$monday.on("click", function(){    
let workoutType = document.createElement("h2")
workoutType.setAttribute("class", "workoutMuscles")
workoutType.innerText = "Chest and Triceps"
$(".dropdown").append(workoutType)
    
})
$tuesday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Legs"
    $(".dropdown").append(workoutType)
        
    })
$wednesday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Back and Biceps"
    $(".dropdown").append(workoutType)
        
    })
$thursday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Shoulders and Abs"
    $(".dropdown").append(workoutType)  
    })

$friday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Chest and Triceps"
    $(".dropdown").append(workoutType)  
    })

$saturday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Rest"
    $(".dropdown").append(workoutType)  
    })

$sunday.on("click", function(){    
    let workoutType = document.createElement("h2")
    workoutType.setAttribute("class", "workoutMuscles")
    workoutType.innerText = "Rest"
    $(".dropdown").append(workoutType)  
    })

    


//EVENT LISTENERS
$form.on('submit', handleGetData)


//FUNCTIONS
function handleGetData(event) {
    event.preventDefault()
    const userInput = $input.val();


$.ajax(settings).then(function (data) {

        let workout = data.find((data) => data.bodyPart === userInput)
        console.log(workout)
        $equipment.html(function(){
            let equipmentName = workout.equipment
            console.log(equipmentName);  
        let equipmentEl = document.createElement("li")
        equipmentEl.innerText = equipmentName;
        $("#content1").append(equipmentEl)    
    })

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

        let exerCssDisplay = workout.gifUrl
        console.log(exerCssDisplay);  
        $("#content1").append(`<img id="cssImg" src = "${exerCssDisplay}"/>`)    


    
     console.log(data); 

}, 
 function (error) {
    console.log('something is wrong')
    console.log(error)
})
 



}



