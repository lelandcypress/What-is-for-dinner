function getGin(userChoice) {
  var getUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + userChoice;
  fetch(getUrl)
    .then(function (cocktail) {
      return cocktail.json();
    })
    .then(function (data) {
      var random = Math.floor(Math.random() * 25);
      var returnedDrink = data.drinks[random];
      console.log(returnedDrink);
      var drinkImage = returnedDrink.strDrinkThumb;
      $("#drink-title").text(returnedDrink.strDrink);
      $("#drink-picture").attr("src", drinkImage);
      var drinkID = returnedDrink.idDrink;
      getRecipe(drinkID);
    });
}
function getRecipe(drinkID) {
  var getUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;
  fetch(getUrl)
    .then(function (cocktail) {
      return cocktail.json();
    })
    .then(function (results) {
      console.log(results);
      results.drinks.forEach((drink) => {
        var drinkEntries = Object.entries(drink),
          ingredientsArray = drinkEntries
            .filter(
              ([key, value]) =>
                key.startsWith("strIngredient") && value && value.trim()
            )
            .map(([key, value]) => value),
          measuresArray = drinkEntries
            .filter(
              ([key, value]) =>
                key.startsWith("strMeasure") && value && value.trim()
            )
            .map(([key, value]) => value);

        for (var i = 0; i < ingredientsArray.length; i++) {
          $("#drink-ingredients").append(
            "<li>" + measuresArray[i] + " " + ingredientsArray[i] + "</li>"
          );
        }
      });
      var mix = results.drinks[0].strInstructions;
      $("#mixing").text(mix);
    });
}
