"use strict"
window.onload = loadDoc(); 

function loadDoc() {
	var displayElement = document.getElementById('text');
	var body = document.getElementsByTagName('body')[0];

	displayElement.id = "title";
	displayElement.innerHTML = "Result: ";

	main.appendChild(displayElement);
}


function display(value){
	var displayElement = document.getElementById('title');
	displayElement.innerHTML = "Result: " + value;
}