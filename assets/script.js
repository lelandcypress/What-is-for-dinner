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
