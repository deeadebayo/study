var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var msgDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        //add random color to array
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

function generateRandomColors(num){
    //make array
    var arr = [];

    //repeat num tumes
    for(var i = 0; i < num; i++){
        //add random color to array
        arr.push(randomColor());
    }

    //return array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


for(var i = 0; i < squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of picked square and compare color to pickedColor
        var clickedColor = this.style.backgroundColor;

        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            msgDisplay.textContent = "Great Job!!";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again";
        }
    });
}
