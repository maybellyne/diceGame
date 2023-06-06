//My JS lines
var myRandomNumber1 = Math.floor(Math.random()*7); //gives a random number 1-6

var randomDiceImage1 = "/Javascript/diceGame/images/dice" + myRandomNumber1 + ".png";

var image1 = document.querySelectorAll(img)[0];

image1.setAttribute("src", randomDiceImage1);

var myRandomNumber2 = Math.floor(Math.random()*7); //gives a random number 1-6

var randomDiceImage2 = "/Javascript/diceGame/images/dice" + myRandomNumber2 + ".png";

var image2 = document.querySelectorAll(img)[1];

image2.setAttribute("src", randomDiceImage2);