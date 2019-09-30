/*==============TASKS THAT STILL NEED TO BE DONE===============
1) Create function for Easy / Hard buttons active status.
2) Create a counter for guessing attempts (3 for example and then game over alert)
3) Final cosmetic changes.
*/

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = winningColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgain = document.querySelector(".btn_1");
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
var transitionButton = document.querySelector(".new_game");
var activeClass = document.querySelector(".active");

//button renamed to New Game if the game has not been won yet
playAgain.textContent = "New Game"
newGame();
colorDisplay.textContent = pickedColor;


//toggle a class of "active" to indicate which game difficulty.
easyGame.addEventListener("click", function(){
    numberOfSquares = 3;
    //Add class on easyGame and remove it from hardGame
    easyGame.classList.add("active");
    hardGame.classList.remove("active");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = winningColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "rgb(50, 124, 194)";
    messageDisplay.textContent = " ";
        for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }   
});

hardGame.addEventListener("click", function(){
    //Add class on hardGame and remove it from easyGame
    hardGame.classList.add("active");
    easyGame.classList.remove("active");
    colors = generateRandomColors(6);
    pickedColor = winningColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "rgb(50, 124, 194)";
    messageDisplay.textContent = " ";
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";        
    } 
})

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
                playAgain.textContent = "Play Again";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;                
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
                messageDisplay.style.color = "rgb(50, 124, 194)";
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
    for(var i = 0; i < num; i++){
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
    var random = Math.floor(Math.random() * numberOfSquares)
    return colors[random];
}  
