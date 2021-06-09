var button = document.getElementById("button");
var userInput;
var container = document.getElementById("main-container");
var mainTitle = document.getElementById("main-title");
button.addEventListener("click", getResults);
var dropDown = [];

function getResults() {
  var getUrl = "https://www.loc.gov/collections/civil-war-maps?fo=json";
  fetch(getUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.content.results);
      mainTitle.textContent = data.title;
    });
}
