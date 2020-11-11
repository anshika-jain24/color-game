var numsquares=6;
var colors= generateColor(numsquares);

var pickedcolor=pickedColor();
colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent= pickedcolor;

var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");

for(var i=0; i<modes.length; i++)
{
	modes[i].addEventListener("click", function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=== "Easy"){
			numsquares=3;
		}else{
			numsquares=6;
		}
		reset();

	});
}


function reset(){
	colors= generateColor(numsquares);
	//pick a new color
	pickedcolor= pickedColor();
	//change display to picked color
	colorDisplay.textContent= pickedcolor;
	//change the squares with new colors
	for(var i=0; i<squares.length; i++)
    {
    	if(colors[i])
    	{
    		squares[i].style.display="block";
    		squares[i].style.backgroundColor=colors[i];
    	}
    	else
    	{
    		squares[i].style.display="none";
    	}
    }
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent=" ";
    resetbutton.textContent="New colors";
}

resetbutton.addEventListener("click", function()
{
	//generate all new color
	reset();

})

for(var i=0; i<squares.length; i++)
{
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add click event listeners
	squares[i].addEventListener("click", function()
	{
		//grab color of picked square
		var clickedcolor= this.style.backgroundColor;
		//compare with picked color
		if(clickedcolor=== pickedcolor)
		{
			messageDisplay.textContent= "Correct";
            changedcolor(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
            resetbutton.textContent= "Play Again?";

		}else{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent= "Try Again";
		}
	})
}

function changedcolor(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickedColor(){

	 var random= Math.floor(Math.random() * colors.length);
     return colors[random];
}

function generateColor(num){
	var arr=[]

	for(var i=0; i<num; i++)
	{
       arr.push(randomcolor())
	}

	return arr;
}

function randomcolor()
{
	//generate red from 0-255
	var r= Math.floor(Math.random() * 256);

	//generate green from 0-255
	var g= Math.floor(Math.random() * 256);

	//generate blue from 0-255
	var b= Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}
