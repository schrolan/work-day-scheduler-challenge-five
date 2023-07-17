//This connects the currentDay id from the index to here.
var currentDay = $("#currentDay")
//This is how we keep track of the current time so the colors change based on the time of day
var currentTime = moment().format("HH")
console.log(currentTime)

//This is how you connect to moment and this is the format we need to show the current day.
currentDay.text(moment().format('MMMM Do YYYY'));
console.log(currentDay)

//This function changes the id on each of the text blocks depending on the time of day
function changeColor () {
    //This loops through each of the ids for the text areas
    var timeBlocks = Array();
    for ( i=9; i<18; i++ ) {
        timeBlocks.push(i)
    };
    timeBlocks.forEach(timeBlocks => {
        console.log(timeBlocks)
    if (timeBlocks < currentTime) {
       document.getElementById(timeBlocks).classList.add("past")
    }
    else if (timeBlocks == currentTime) {
        document.getElementById(timeBlocks).classList.add("present")
    }
    else {
        document.getElementById(timeBlocks).classList.add("future")
    }
    })
}

window.addEventListener("load", (event) =>{
    changeColor()
})

function saveText(id) {
    localStorage.setItem(document.getElementById("9").innerText, document.getElementById("9").innerText)
    console.log(document.getElementById("9").innerText)
  }