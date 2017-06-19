var numbColors = 6;
var colors = generateRandomColor(numbColors);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var rgbColorHeading = document.getElementById("rgbColor");
var message = document.getElementById("message");
rgbColorHeading.textContent = pickedColor;
var newColorBtn = document.getElementById("newColor");
var modeButton = document.querySelectorAll(".mode");


init();

function init(){
    setUpSquares();
    setupModeButtons();

}

function setUpSquares() {
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                message.textContent = "Correct";
                changeColor(pickedColor);
                newColorBtn.textContent = "PLAY AGAIN?"

            }else{
                newColorBtn.textContent = "NEW COLOUR"
                message.textContent = "Try Again!!";
                this.style.backgroundColor="steelblue";
            }

        });
    }

}

function setupModeButtons() {
    for(var i=0;i<modeButton.length;i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            if(this.textContent === "Easy") {
                numbColors = 3;
            }
            else{
                numbColors = 6;
            }
            reset();
        });
    }

}


function reset(){
    newColorBtn.textContent = " NEW COLOURS"
    // Generate random colors
    colors = generateRandomColor(numbColors);
    // pick new colors
    pickedColor = pickColor();

    //Change display to match the picked color
    rgbColorHeading.textContent = pickedColor;

    message.textContent="";

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.background="steelblue";

}


function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
}


function generateRandomColor(number){
    var colorArray = [];
    for(var i=0;i<number;i++){
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

newColorBtn.addEventListener("click",function(){
    reset();

})