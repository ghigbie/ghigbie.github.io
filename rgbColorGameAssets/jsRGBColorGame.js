let numSquares = 6;
var colors = [];
var pickedColor;
//selector variables
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons(); //set listeners to the class "mode" buttons
	setUpSquares(); //sets up the square listeners
	reset();//reset function sets the color variables declared above
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){  //this touches both of the easy and difficult "mode" buttons
		modeButtons[i].addEventListener("click", function(){
		for(var a = 0; a< modeButtons.length; a++){ //this loop will remove all classes add to any buttons of the class
			modeButtons[a].classList.remove("selected"); //this adds to the complexity of the code, but the number of buttons will be limited, so this is not a huge problem
		}
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //ternary operator - is the same as an if else statement
		reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			//alert(`Correct! You clicked on ${pickedColor}!`);
			messageDisplay.textContent = "Correct! Awesome Eye!"
			changeToWinningColor(clickedColor);
			resetButton.textContent = "Play Again?"
		}else{
			//alert(`Try again. You clicked color ${clickedColor}`);
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"; 
		}
	});
	}
}

function reset(){//sets the values of the color variables declared above
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeToWinningColor(color){
	for(let a = 0; a < squares.length; a++){
		squares[a].style.background = color;
	}
	h1.style.background = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numberOfColors){
	var red;
	var green;
	var blue;
	var newColor;
	var numberOfColorsArray = [];
	for(let i = 0; i < numberOfColors; i++){
		red = Math.floor(Math.random() * 256);
		green = Math.floor(Math.random() * 256);
		blue = Math.floor(Math.random() * 256);
		newColor = "rgb("+ red + ", "+ green + ", " + blue +")";
		numberOfColorsArray.push(newColor);
	}
	return numberOfColorsArray;
}