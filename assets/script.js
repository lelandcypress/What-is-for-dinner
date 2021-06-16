var proteinbuttonEl = document.getElementById("proteinbutton");
var starchbuttonEl = document.getElementById("starchbutton");
var beefEl  = document.getElementById("beef")
var chickenEl  = document.getElementById("chicken")
var fishEl  = document.getElementById("fish")
var porkEl  = document.getElementById("pork")
var riceEl  = document.getElementById("rice")
var potatoesEl  = document.getElementById("potatoes")
var beansEl  = document.getElementById("beans")
var noodlesEl  = document.getElementById("noodles")



var userInput;
var container = document.getElementById("main-container");
var mainTitle = document.getElementById("main-title");


// choose protein button
proteinbuttonEl.addEventListener("click", starchChoice);
  const 



// Starch Choice




// choose starch button






function getResults() {
  var getUrl = "https://www.loc.gov/collections/civil-war-maps?fo=json";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.content.results);
      mainTitle.textContent = data.title;
    });
}


