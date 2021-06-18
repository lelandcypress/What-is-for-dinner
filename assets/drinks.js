//Gin Recipes//
function getGin(userChoice) {
  var getUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + userChoice;
  fetch(getUrl)
    .then(function (cocktail) {
      return cocktail.json();
    })
    .then(function (data) {
      console.log(data);
      var returnedDrink = data.drinks[0];
      var drinkImage = returnedDrink.strDrinkThumb;
      $("#drink-title").text(returnedDrink.strDrink);
      $("#drink-picture").attr("src", drinkImage);
      var ingredients = data.drinks[0];
      var mix = data.drinks[0].strInstructions;
      $("#mixing").text(mix);
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure1 +
          "</sp>" +
          ingredients.strIngredient1 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure2 +
          "</sp>" +
          ingredients.strIngredient2 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure3 +
          "</sp>" +
          ingredients.strIngredient3 +
          "</p>"
      );
    });
}
//Vodka Recipes//
function getVodka(userChoice) {
  var getUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + userChoice;
  fetch(getUrl)
    .then(function (cocktail) {
      return cocktail.json();
    })
    .then(function (data) {
      console.log(data);
      var returnedDrink = data.drinks[0];
      var drinkImage = returnedDrink.strDrinkThumb;
      $("#drink-title").text(returnedDrink.strDrink);
      $("#drink-picture").attr("src", drinkImage);
      var ingredients = data.drinks[0];
      var mix = data.drinks[0].strInstructions;
      $("#mixing").text(mix);
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure1 +
          "</sp>" +
          ingredients.strIngredient1 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure2 +
          "</sp>" +
          ingredients.strIngredient2 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure3 +
          "</sp>" +
          ingredients.strIngredient3 +
          "</p>"
      );
    });
}
//Whiskey Recipes//
function getVodka(userChoice) {
  var getUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + userChoice;
  fetch(getUrl)
    .then(function (cocktail) {
      return cocktail.json();
    })
    .then(function (data) {
      console.log(data);
      var returnedDrink = data.drinks[0];
      var drinkImage = returnedDrink.strDrinkThumb;
      $("#drink-title").text(returnedDrink.strDrink);
      $("#drink-picture").attr("src", drinkImage);
      var ingredients = data.drinks[0];
      var mix = data.drinks[0].strInstructions;
      $("#mixing").text(mix);
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure1 +
          "</sp>" +
          ingredients.strIngredient1 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure2 +
          "</sp>" +
          ingredients.strIngredient2 +
          "</p>"
      );
      $("#drink-ingredients").append(
        "<p><sp> " +
          ingredients.strMeasure3 +
          "</sp>" +
          ingredients.strIngredient3 +
          "</p>"
      );
    });
}
