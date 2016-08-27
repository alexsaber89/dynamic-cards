//DOM selectors
var userInput = document.getElementById("textarea");
var button = document.getElementById("create_button");
var output = document.getElementById("output");

//Event Handlers
button.addEventListener("click",addCard);

//Functions
function addCard() {
  var userInputValue = userInput.value;
  var newCard = "<div class='card'><p>" + userInputValue + "</p><button class='delete'>Delete</button></div>";
  output.innerHTML += newCard;
}

function getCardToDelete(event) {
  var clicked = event.target;
  console.log(clicked);
  if (clicked.classList.contains("delete")) {
  output.removeChild(clicked.parentElement);
  }
}

var buttons = document.querySelector("#output");
buttons.addEventListener("click",getCardToDelete);