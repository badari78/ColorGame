/**
 * Created by Shravya on 5/5/17.
 */
 var colors = [
     "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
];

 var pickedColor = colors[3];
 var squares = document.querySelectorAll(".square");
 var rgbColorHeading = document.getElementById("rgbColor");
 rgbColorHeading.textContent = pickedColor;

 // add color to squares
// pick colors from square using event listiner
// grab color from the square
// compare color to picked color

 for(var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor = colors[i];

     squares[i].addEventListener("click",function(){
         var clickedColor = this.style.backgroundColor;
         if(pickedColor === clickedColor){
             alert("Correct");
         }else{
             alert("Wrong");
         }

     });
 }


