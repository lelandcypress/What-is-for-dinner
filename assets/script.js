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





var genericVar = document.getElementById("food-search");
var searchBTN = document.getElementById("searchBtn");
var renderMeal = document.getElementById("render-meal");

searchBTN.addEventListener("click", function () {
  userChoice = genericVar.value.trim();
  getResults(userChoice);
});

function getResults(userChoice) {
  var getUrl =
    "https://api.edamam.com/api/recipes/v2/?app_id=99ca5904&app_key=c00c47bd8a69967e0b0559fe7d599651&type=public&q=" +
    userChoice +
    "&mealType=dinner&dishType=main%20course";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var random = Math.floor(Math.random());
      var returnedRecipe = data.hits[random];
      console.log(returnedRecipe);
      renderMeal.textContent = returnedRecipe.recipe.label;
    });
}


