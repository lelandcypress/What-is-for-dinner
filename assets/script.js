window.onload = function () {

// choose protein button event listeners//
var meat = document.getElementsByClassName("meat-button");
for (var i = 0; i < meat.length; i++) {
  (function (index) {
    meat[index].onclick = function () {
      userChoice = menuChoice[index];
      $(".meatcard").hide();
      //clears inner HTML to prevent search items from stacking//
      $("#directions").html("");
      $("#ingredients").html("");
      //First fetch request to Spoonacular API, searches by ingredient name//
      var getUrl =
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=8cc43afd180940aba414f655f8a71f64&ingredients=" +
        userChoice +
        "&number=20";
      fetch(getUrl)
        .then(function (recipe) {
          return recipe.json();
        })
        //returns a random option from the returned recipes, renders recipe title and picture assigns recipe ID//
        .then(function (recipe) {
          var random = Math.floor(Math.random() * 20);
          var returnedRecipe = recipe[random];
          var recipeID = returnedRecipe.id;
          var recipeImage = returnedRecipe.image;
          $("#recipe-title").text(returnedRecipe.title);
          $("#recipe-picture").attr("src", recipeImage);
          //Second fetch request returns ingredient list and recipe directions.//
          var getrecipeUrl =
            "https://api.spoonacular.com/recipes/" +
            recipeID +
            "/information?apiKey=8cc43afd180940aba414f655f8a71f64&includeNutrition=true";
          fetch(getrecipeUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              var instructionsArray = data.analyzedInstructions[0].steps;
              for (var i = 0; i < instructionsArray.length; i++) {
                $("#directions").append(
                  "<li>" + instructionsArray[i].step + "</li>"
                );
              }
              for (var i = 0; i < data.extendedIngredients.length; i++) {
                var ingredients = data.extendedIngredients[i].original;
                $("#ingredients").append("<li>"  + ingredients + "</li>");
              }
            });
        });
    };
  })(i);
}

var menuChoice = ["beef", "chicken", "fish", "pork"];


//Drink Buttons Event Listeners//
$(".drink-button").click(function (event) {
  event.stopPropagation();
  userChoice = event.target;
  $("#drink-directions").html("");
  $("#drink-ingredients").html("");
  $(".drinkcard").hide();
  // $("#drink-container").show();
  // $("#beer-container").hide();
  getDrink(userChoice.innerHTML);
});
//Had to build out seperate listener since beer comes from a different API than the cocktails//
$("#beerBtn").click(function (event) {
  event.stopPropagation();
  $(".drinkcard").hide();
  // $("#beer-container").show();
  // $("#drink-container").hide();
  getBeer();
});
//Note: all cocktail and beer fucitions found on drinks.js
};