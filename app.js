
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

const $monday = $('#Mon')
const $tuesday = $('#Tues')
const $wednesday = $('#Wednes')
const $thursday = $('#Thurs')
const $friday = $('#Frid')
const $saturday = $('#Sat')
const $sunday = $('#Sund')
const $main = $('main')


//EVENT LISTENERS
$monday.on("click", handleGetData)
$tuesday.on("click", handleGetData)
$wednesday.on("click", handleGetData)
$thursday.on("click", handleGetData)
$friday.on("click", handleGetData)
$saturday.on("click", handleGetData)
$sunday.on("click", handleGetData)


//FUNCTIONS
function handleGetData(event) {
    event.preventDefault()


$.ajax(settings).then(function (data) {
    if($monday.on){
        let h2 = document.createElement("h2");
        h2.innerText = 'Chest and Triceps'
        h2.id = 'mondayWorkout'
        $main.append(h2)
        console.log(h2);

    }
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

// Top Menu Buttons:
// var menu = [
//     { text: "Home"},
//     { text: "Random Drink"},
//     { text: "Liquor Choice"},
//     { text: "Search Drink"},
//     { text: "All Drinks"},
//   ];
  
//   const topMenuEl = document.getElementById("menu-bar");
//   topMenuEl.style.height = "100%";
//   topMenuEl.style.backgroundColor = "skyblue"
//   topMenuEl.classList.add("flex-around");
  
//   for (let i of menu) {
//     let bEl = document.createElement("button");
//     bEl.setAttribute("submit", menu);
//     bEl.textContent = i.text;
//     topMenuEl.append(bEl);
//   }