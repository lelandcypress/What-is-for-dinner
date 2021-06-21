window.onload = function () {

// choose protein button
var meat = document.getElementsByClassName("button");
for (var i = 0; i < meat.length; i++) {
  (function (index) {
    meat[index].onclick = function () {
      userChoice = menuChoice[index];
      $("#directions").html("");
      $("#ingredients").html("");
   

// meal api fetch request
      var getUrl =
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=8cc43afd180940aba414f655f8a71f64&ingredients=" +
        userChoice +
        "&number=20";
      fetch(getUrl)
        .then(function (recipe) {
          return recipe.json();
        })

// randomly display meals based on meat choice
        .then(function (recipe) {
          var random = Math.floor(Math.random() * 20);
          var returnedRecipe = recipe[random];
          var recipeID = returnedRecipe.id;
          var recipeImage = returnedRecipe.image;
          $("#recipe-title").text(returnedRecipe.title);
          $("#recipe-picture").attr("src", recipeImage);
          
// getIngredientList(recipeID);
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
        )
      }
    })
}};
