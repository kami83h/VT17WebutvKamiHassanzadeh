var calcSign = document.getElementsByClassName("calc__sign");
var calcNumber = document.getElementsByClassName("calc__number");
var display = document.getElementById("result");
var displayText= document.getElementById("results");

var toText = "";
var result = 0;
var output;

for (var i = 0; i < calcNumber.length; i++){
	calcNumber[i].addEventListener("click", myFunction1);
}

for (var i = 0; i < calcSign.length; i++) {
	calcSign[i].addEventListener("click", myFunction2);
}

function myFunction1(){
	if (display.innerText[0] == 0){
		display.textContent = this.textContent;
	} else {
		display.textContent += this.textContent;
	}
}
function myFunction2() {

	if(this.textContent == "Del"){
		document.getElementById("result").textContent = 0; 
	}

	else if (this.innerText == "="){
		sum();
		reset();
	}
	else if(display.textContent[display.textContent.length-1] == "+"){
		alert("Fel! du kan bara skriva en gång +, Försök igen.");
	} 
	else if(display.textContent[display.textContent.length-1] == "-"){
		alert("Fel! du kan bara skriva en gång -, Försök igen.");
	}
	
	else {
		display.textContent += this.textContent;
	}	
}

function reset(){
	display.textContent = "0";
}
function sum(){
	toText += "<li>" + display.textContent  + " = " + eval(display.textContent) +"</li>";
	document.getElementById("results").innerHTML = toText;
}