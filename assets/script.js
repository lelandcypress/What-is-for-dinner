var proteinbuttonEl = document.getElementById("proteinbutton");
var starchbuttonEl = document.getElementById("starchbutton");
var beefEl = document.getElementById("beefbtn");
var chickenEl = document.getElementById("chickenbtn");
var fishEl = document.getElementById("fishbtn");
var porkEl = document.getElementById("porkbtn");
var riceEl = document.getElementById("rice");
var potatoesEl = document.getElementById("potatoes");
var beansEl = document.getElementById("beans");
var noodlesEl = document.getElementById("noodles");
var container = document.getElementById("main-container");
var mainTitle = document.getElementById("main-title");
var mealEL = $("#render-meal");
var beerPairing = "beef";

// choose protein button
//proteinbuttonEl.addEventListener("click", starchChoice);

// Starch Choice

// choose protein button

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  (function (index) {
    buttons[index].onclick = function () {
      userChoice = proteinChoice[index];
      $("#directions").html("");
      $("#ingredients").html("");

      var getUrl =
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=61d983d2f15a441c9cde53282684e2f9&ingredients=" +
        userChoice +
        "&number=20";
      fetch(getUrl)
        .then(function (recipe) {
          return recipe.json();
        })
        .then(function (recipe) {
          var random = Math.floor(Math.random() * 20);
          var returnedRecipe = recipe[random];
          var recipeID = returnedRecipe.id;
          var recipeImage = returnedRecipe.image;
          $("#recipe-title").text(returnedRecipe.title);
          $("#recipe-picture").attr("src", recipeImage);
          getIngredientList(recipeID);
        });
    };
  })(i);
}

var proteinChoice = ["beef", "chicken", "fish", "pork"];

// event.stopPropagation;
// userChoice = $("#food-search").val();
// enterIngredients(userChoice);
// $("#directions").html("");
// $("#ingredients").html("");

// $("#drinkBtn").click(function (event) {

//     event.stopPropagation;
//   userChoice = $("#drink-search").val();
//   $("#drink-directions").html("");
//   $("#drink-ingredients").html("");
//   getDrinks(userChoice);
// });

// function getDrinks(userChoice) {
//   var getUrl =
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + userChoice;
//   fetch(getUrl)
//     .then(function (cocktail) {
//       return cocktail.json();
//     })
//     .then(function (data) {
//       var random = Math.floor(Math.random() * 20);
//       var returnedDrink = data.drinks[random];
//       console.log(returnedDrink);
//     });
// }

// choose starch button
$("#foodBtn").click(function (event) {
  event.stopPropagation;
  userChoice = $("#food-search").val();
  enterIngredients(userChoice);
  $("#directions").html("");
  $("#ingredients").html("");
});

$(".drink-button").click(function (event) {
  event.stopPropagation;
  userChoice = event.target;
  $("#drink-directions").html("");
  $("#drink-ingredients").html("");
  getDrink(userChoice.innerHTML);
});

$("#beerBtn").click(function (event) {
  event.stopPropagation;
  getBeer();
});

function getBeer() {
  var getUrl = "https://api.punkapi.com/v2/beers?food/random";
  fetch(getUrl)
    .then(function (beer) {
      return beer.json();
    })
    .then(function (beer) {
      var random = Math.floor(Math.random() * 20);
      var chosenBeer = beer[random];
      $("#beer-picture").attr("src", chosenBeer.image_url);
      $("#beer-title").text(chosenBeer.name);
      $("#beer-tag").text(chosenBeer.tagline);
      $("#beer-abv").text("ABV: " + chosenBeer.abv);
      $("#beer-description").text("Description: " + chosenBeer.description);
      console.log(chosenBeer.food_pairing[1]);
      for (var i = 0; i < chosenBeer.food_pairing.length; i++) {
        $("#beer-pairing").append(
          "<li>" + chosenBeer.food_pairing[i] + "</li>"
        );
      }
    });
}

function getIngredientList(recipeID) {
  var getUrl =
    "https://api.spoonacular.com/recipes/" +
    recipeID +
    "/information?apiKey=61d983d2f15a441c9cde53282684e2f9&includeNutrition=true";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var instructionsArray = data.analyzedInstructions[0].steps;
      for (var i = 0; i < instructionsArray.length; i++) {
        $("#directions").append("<li>" + instructionsArray[i].step + "</li>");
      }
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        var ingredients = data.extendedIngredients[i].original;
        $("#ingredients").append("<li>" + ingredients + "</li>");
      }
    });
}
