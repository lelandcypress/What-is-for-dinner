function enterIngredients(userChoice) {
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
        $("#ingredients").append("<li> foo" + ingredients + "</li>");
      }
    });
}
