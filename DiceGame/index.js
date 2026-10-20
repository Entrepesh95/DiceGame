// creating a random number 
var randomNmuber1 = Math.floor(Math.random() * 6) + 1;

var randomNmuber2 = Math.floor(Math.random() * 6) + 1;


// for the left img
var imgRandom1 = document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNmuber1 +".png");

// for the right img
var imgRandom2 = document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNmuber2 +".png");

// changing the title and comparing who has won

if (randomNmuber1 > randomNmuber2) {
    document.querySelector("h1").innerHTML = "Player 1 won!";
} else if (randomNmuber1 < randomNmuber2) {
    document.querySelector("h1").innerHTML = "Player 2 won!";
} else if ( randomNmuber1 == randomNmuber2) {
    document.querySelector("h1").innerHTML = "its a draw!";
}