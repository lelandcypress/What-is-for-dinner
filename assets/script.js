window.onload = function () {
  $(".dinnercard").hide();
  $(".drinkscard").hide();
  $(".beercard").hide();
  // choose protein button event listeners//
  var meat = document.getElementsByClassName("meat-button");
  for (var i = 0; i < meat.length; i++) {
    (function (index) {
      meat[index].onclick = function () {
        $(".meatcard").hide();
        $(".dinnercard").show();
        userChoice = menuChoice[index];
        //clears inner HTML to prevent search items from stacking//
        $("#directions").html("");
        $("#ingredients").html("");
        //First fetch request to Spoonacular API, searches by ingredient name//
        var getUrl =
          "https://api.spoonacular.com/recipes/findByIngredients?apiKey=ae7a517d2a4c413885e47056369d51bc&ingredients=" +
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
              "/information?apiKey=ae7a517d2a4c413885e47056369d51bc&includeNutrition=true";
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
                  $("#ingredients").append("<li>" + ingredients + "</li>");
                }
              });
          });
      };
    })(i);
  }

  var menuChoice = ["beef", "chicken", "fish", "pork"];

  $("#directions-food-title").on("click", () => {
    $("#directions").toggle();
  });
  $("#directions-food-title").on("mouseenter", () => {
    $("#click-me").show();
  });
  $("#directions-food-title").on("mouseleave", () => {
    $("#click-me").hide();
  });

  $(".drink-button").click(function (event) {
    event.stopPropagation();
    userChoice = event.target;
    $("#drink-directions").html("");
    $("#drink-ingredients").html("");
    $(".drinkmenu").hide();
    $(".beercard").hide();
    $(".drinkscard").show();
    getDrink(userChoice.innerHTML);
  });
  //Had to build out seperate listener since beer comes from a different API than the cocktails//
  $("#beerBtn").click(function (event) {
    event.stopPropagation();
    $(".drinkmenu").hide();
    $(".drinkscard").hide();
    $(".beercard").show();
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
};
//Note: all cocktail and beer fucitions found on drinks.js
