var proteinbuttonEl = document.getElementById("proteinbutton");
var starchbuttonEl = document.getElementById("starchbutton");
var beefEl = document.getElementById("beef");
var chickenEl = document.getElementById("chicken");
var fishEl = document.getElementById("fish");
var porkEl = document.getElementById("pork");
var riceEl = document.getElementById("rice");
var potatoesEl = document.getElementById("potatoes");
var beansEl = document.getElementById("beans");
var noodlesEl = document.getElementById("noodles");
var container = document.getElementById("main-container");
var mainTitle = document.getElementById("main-title");
var mealEL = $("#render-meal");
var beerPairing = "beef";

// choose protein button
//proteinbuttonEl.addEventListener("click", starchChoice);

// Starch Choice

// choose starch button
$("#foodBtn").click(function (event) {
  event.stopPropagation;
  userChoice = $("#food-search").val();
  enterIngredients(userChoice);
  $("#directions").html("");
  $("#ingredients").html("");
});

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
