window.onload = function () {
<<<<<<< HEAD

// choose protein button event listeners//
var meat = document.getElementsByClassName("meat-button");
for (var i = 0; i < meat.length; i++) {
  (function (index) {
    meat[index].onclick = function () {
      $(".meatcard").hide();
      userChoice = menuChoice[index];
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


$(".drink-button").click(function (event) {
  
  event.stopPropagation();
  
  userChoice = event.target;
 
  $("#drink-directions").html("");
  $("#drink-ingredients").html("");
  $("#drink-container").show();
  $("#beer-container").hide();
  getDrink(userChoice.innerHTML);
});
//Had to build out seperate listener since beer comes from a different API than the cocktails//
$("#beerBtn").click(function (event) {
  
  event.stopPropagation();
  $("#beer-container").show();
  $("#drink-container").hide();
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
//Note: all cocktail and beer fucitions found on drinks.js
=======
  var beefEl = document.getElementById("beefbtn");
  var chickenEl = document.getElementById("chickenbtn");
  var fishEl = document.getElementById("fishbtn");
  var porkEl = document.getElementById("porkbtn");
  var menuChoice = ["beef", "chicken", "fish", "pork"];

  // choose protein button event listeners//
  var meat = document.getElementsByClassName("meat-button");
  for (var i = 0; i < meat.length; i++) {
    (function (index) {
      meat[index].onclick = function () {
        userChoice = menuChoice[index];
        console.log(userChoice);
        //clears inner HTML to prevent search items from stacking//
        $("#directions").html("");
        $("#ingredients").html("");
        //First fetch request to Spoonacular API, searches by ingredient name//
        var getUrl =
          "https://api.spoonacular.com/recipes/findByIngredients?apiKey=61d983d2f15a441c9cde53282684e2f9&ingredients=" +
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
            $("#ingredients-food-title").show();
            $("#directions-food-title").show();
            //Second fetch request returns ingredient list and recipe directions.//
            var getrecipeUrl =
              "https://api.spoonacular.com/recipes/" +
              recipeID +
              "/information?apiKey=61d983d2f15a441c9cde53282684e2f9&includeNutrition=true";
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
  $("#directions-food-title").on("click", () => {
    $("#directions").show();
  });
  $("#directions-food-title").on("mouseenter", () => {
    $("#click-me").show();
  });
  $("#directions-food-title").on("mouseleave", () => {
    $("#click-me").hide();
  });
  //Drink Buttons Event Listeners//
  $(".drink-button").click(function (event) {
    event.stopPropagation();
    userChoice = event.target;
    $("#drink-directions").html("");
    $("#drink-ingredients").html("");
    $("#drink-container").show();
    $("#beer-container").hide();
    console.log(userChoice);

    getDrink(userChoice.innerHTML);
  });
  //Had to build out seperate listener since beer comes from a different API than the cocktails//
  $("#beerBtn").click(function (event) {
    event.stopPropagation();
    $("#beer-container").show();
    $("#drink-container").hide();
    getBeer();
  });
  //Note: all cocktail and beer functions found on drinks.js
};
>>>>>>> a03bd0efee19bb313a91b683386aadb23ccf66e6
