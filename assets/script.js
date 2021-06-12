var genericVar = document.getElementById("food-search");
var searchBTN = document.getElementById("searchBtn");

searchBTN.addEventListener("click", function () {
  userChoice = genericVar.value.trim();
  getResults(userChoice);
});

function getResults() {
  var getUrl = "";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {});
}
//I am done//
