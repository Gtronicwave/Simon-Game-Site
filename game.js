
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]ж

function nextSequence() {
return Math.floor(Math.random() * 4);
}

var randomNumber = nextSequence();

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);