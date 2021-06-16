var proteinbuttonEl = document.getElementById("proteinbutton");
var starchbuttonEl = document.getElementById("starchbutton");
var beefEl = document.getElementById("beef");
var chickenEl = document.getElementById("chicken");
var fishEl = document.getElementById("fish");
var porkEl = document.getElementById("pork");
var riceEl = document.getElementById("rice");
var potatoesEl = document.getElementById("potatoes");
var beansEl = document.getElementById("beans");
var noodlesEl = document.getElementById("noodles");

var container = document.getElementById("main-container");
var mainTitle = document.getElementById("main-title");
var mealEL = $("#render-meal");

// choose protein button
//proteinbuttonEl.addEventListener("click", starchChoice);

// Starch Choice

// choose starch button
$("#searchBtn").click(function () {
  userChoice = $("#food-search").val();
  getResults(userChoice);
});

function getResults() {
  var getUrl =
    "https://api.edamam.com/api/recipes/v2/?app_id=99ca5904&app_key=c00c47bd8a69967e0b0559fe7d599651&type=public&q=" +
    userChoice +
    "&mealType=dinner&dishType=main%20course";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var random = Math.floor(Math.random() * 20);
      var returnedRecipe = data.hits[random];
      console.log(returnedRecipe);
      var recipeImage = returnedRecipe.recipe.image;
      var recipeLink = returnedRecipe.recipe.url;

      $("#recipe-title").text(returnedRecipe.recipe.label);
      $("#recipe-picture").attr("src", recipeImage);
      $("#recipe-link").attr("href", recipeLink);

      for (var i = 0; i < returnedRecipe.recipe.ingredients.length; i++) {
        console.log(i++);
        var recipeList = returnedRecipe.recipe.ingredients[i].text;
        $("#ingredients").append("<li></li>").text(recipeList);
      }
    });
}
