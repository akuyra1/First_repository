var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

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
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "grey";
            messageDisplay.textContent = "Try again";
        }
    });
};


function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickedColor() {
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    //use the random number to access the number from array
    return colors[random];
}   