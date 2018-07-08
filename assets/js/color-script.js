var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector('#colorDisplay');
var msgDisplay = document.querySelector('#message');
var header = document.querySelector('.header');
var resetBtn = document.querySelector(".resetBtn");
var modeBtns = document.querySelectorAll(".mode");


init ();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
};

function setUpModeButtons(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners
        squares[i].addEventListener("click", function(){
            //grab color of picked square and compare color to pickedColor
            var clickedColor = this.style.backgroundColor;
    
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                msgDisplay.textContent = "Great Job!!";
                resetBtn.textContent = "New Game?";
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                msgDisplay.textContent = "Try Again";
                resetBtn.textContent = "New Colors";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    msgDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
        //add random color to array
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#3c74ae";
}

resetBtn.addEventListener("click", function(){
    reset();
});

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