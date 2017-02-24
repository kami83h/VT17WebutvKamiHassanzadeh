"use strict"
window.onload = loadDoc(); 

function loadDoc() {
	var displayElement = document.createElement('h3');
	var body = document.getElementsByTagName('body')[0];

	displayElement.id = "title";
	displayElement.innerHTML = "Result: ";

	body.appendChild(displayElement);
}


function display(value){
	var displayElement = document.getElementById('title');
	displayElement.innerHTML = "Result: " + value;
}