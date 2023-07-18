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


//Onclick function that is called in the HTML. This is why the id in the getElementById is just id and not a specific ID, that is determined in the HTML.
function saveText(id) {
    console.log(id)
    console.log(document.getElementById(id))
    //The key value pair, the key is the title and the value is what we want.
    localStorage.setItem(id, document.getElementById(id).value)
    console.log(document.getElementById(id).value)
  }

 //This is the function that puts the text back into the textArea once the page is loaded again.
  function loadData() {
    for (i = 9; i < 18; i++) {
        //getItem pulls the value, which is why we are not using a key value pair here.
        data = localStorage.getItem(i)
        document.getElementById(i).value = data
    }
    changeColor()
  }