var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = winningColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgain = document.querySelector(".btn_1");
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;
playAgain.textContent = "New Game"
newGame();



// ----------------------Play again button code -------------------

playAgain.addEventListener("click", function() {
    //Change button name to "New game"
    playAgain.textContent = "New Game";
    //generate all new colors
    colors = generateRandomColors(6);
    //pick new random color from array
    pickedColor = winningColor();
    //change picked color message
    colorDisplay.textContent = pickedColor;
    //change h1 background color back to default (css)
    h1.style.background =  "rgb(50, 124, 194)";
    messageDisplay.style.color = "black";
    //change / remove "correct!" message
    messageDisplay.textContent = "";
    //change colors of squares
    newGame()
})
// ----------------------Play again button code END -------------------

//-----------------------MAIN CODE ------------------------------------
function newGame(){
    for(var i = 0; i < squares.length; i++) {
        //Add initial colors to squares
        squares[i].style.backgroundColor = colors[i]
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grap color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Compare clicked color to pickedColor
            if(clickedColor === pickedColor) {               
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.color = pickedColor;
                playAgain.textContent = "Play Again?";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                playAgain.style.display = "unset";
            } else {
                this.style.backgroundColor = "rgb(97, 94, 94)";
                messageDisplay.textContent = "Try again";
            }
        });
    };
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
         //change each square to match given color
        squares[i].style.backgroundColor = color;
    }
   
};

function generateRandomColors(num) {
    //make array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i <= num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    };
    //return that array
    return arr;
};

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function winningColor() {
    var random = Math.floor(Math.random() * 6);
    return colors[random];
}   


