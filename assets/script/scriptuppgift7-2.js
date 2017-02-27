"use strict"
console.log("load");
var value = 70;
var numberone,numbertwo,numbertre,numberfour,numberfive,numbersex,numberseven,one,two,tre,four,five,sex,seven;

document.getElementById("input").addEventListener("input", myFunction);


	numberone = parseFloat(document.getElementById("one").innerText);
	numbertwo = parseFloat(document.getElementById("two").innerText);
	numbertre = parseFloat(document.getElementById("tre").innerText);
	numberfour = parseFloat(document.getElementById("four").innerText);
	numberfive = parseFloat(document.getElementById("five").innerText);
	numbersex = parseFloat(document.getElementById("sex").innerText);
	numberseven = parseFloat(document.getElementById("seven").innerText);

	function myFunction() {
		var value = document.getElementById("input").value;
		localStorage.portionSize = value;

		one = numberone/70 * value;
		two = numbertwo/70 * value;
		tre = numbertre/70 * value;
		four = numberfour/70 * value;
		five = numberfive/70 * value;
		sex = numbersex/70 * value;
		seven = numberseven/70 * value;

		if(value==35||value==70){
			document.getElementById("one").innerHTML = one.toFixed(0);
			document.getElementById("two").innerHTML = two.toFixed(0);
			document.getElementById("tre").innerHTML = tre.toFixed(0);
			document.getElementById("four").innerHTML = four.toFixed(0);
			document.getElementById("five").innerHTML = five.toFixed(0);
			document.getElementById("sex").innerHTML = sex.toFixed(0);
			document.getElementById("seven").innerHTML = seven.toFixed(0);
		}
		else{
			document.getElementById("one").innerHTML = one.toFixed(1);
			document.getElementById("two").innerHTML = two.toFixed(1);
			document.getElementById("tre").innerHTML = tre.toFixed(1);
			document.getElementById("four").innerHTML = four.toFixed(1);
			document.getElementById("five").innerHTML = five.toFixed(1);
			document.getElementById("sex").innerHTML = sex.toFixed(1);
			document.getElementById("seven").innerHTML = seven.toFixed(1);
		}
	}
