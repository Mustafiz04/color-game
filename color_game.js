// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]


var numSquare = 9;
var colors = generateRandomColors(numSquare);

var pickedColor = pickColor();
var h1color = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var medBtn = document.querySelector("#medBtn");
var hardBtn = document.querySelector("#hardBtn");




easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    medBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    
    h1color.style.backgroundColor ="blue";
    message.textContent = "";
    numSquare = 3
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1color.style.background = "blue";
});





medBtn.addEventListener("click", function(){
    medBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    h1color.style.backgroundColor = "blue";
    message.textContent = "";
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickColor();
    for(var i = 0; i< squares.length; i++){
        squares[i].style.background = colors[i]
        squares[i].style.display = "block";
        if(i>=6){
            squares[i].style.display = "none";
        }
    }
})



hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    medBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    h1color.style.backgroundColor ="blue";
    message.textContent = "";
    numSquare = 9
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; squares.length; i++){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }  
})


reset.addEventListener("click", function(){
    // alert("asdasdj")

    colors = generateRandomColors(numSquare);

    pickedColor = pickColor();
    // alert(pickColor)

    colorDisplay.textContent = pickedColor;

    for(var i = 0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    } 

    h1color.style.backgroundColor ="blue";

    reset.textContent = "New Colors";

    message.textContent = "";

    // reset.style.fontSize = "15px"
});




for(var i = 0; i<squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            // alert("Correct");
            message.textContent = "Correct!";
            changeColor(pickedColor);
            h1color.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again!"
            // this.style.cursor = "auto";
        }else{
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    });
}

function changeColor(color){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}


function pickColor(){
    var random =  Math.floor(Math.random() * colors.length)
    return colors[random];
}


function generateRandomColors(num){
    //make array
    var arr = []
    //add num randon colors to color
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
        //get random color and push into arr
    }
    //return array
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var r = Math.floor(Math.random()*256);

    var b = Math.floor(Math.random()*256);

    var g = Math.floor(Math.random()*256);

    return "rgb(" + r + ", "  + g + ", " + b + ")";

}