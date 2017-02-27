
function myFunction1() {
	var message,i,del;
	message = document.getElementById("idNumberResult");
	message.innerHTML = "";
	var x = document.getElementById("idNumber").value;
	var sum=0;

	try { 
		if(x == "")  throw "is Empty";
		if(isNaN(x)) throw "Fel(prova utan - eller.)";
		if(x.length===10||x.length===10+1||x.length===12||x.length===12+1){
			
			if(x.length===10||x.length===10+1){
						var n= x.slice(0,10);
		}
		else{
			var n = x.slice(2,12);
		}

		for(var i=0;i<n.length;i++){
			console.log(sum);
			
			var char = Number(n[i]);
			if(i%2===0){
				if(char*2 >=10){
					char=char*2;
					char= char-9;
					sum +=char;
				}
				else{
					sum +=char*2;
				}
			}
			else{
				if(char*1 >=10){
					sum +=char-9;
				}
				else{
					sum +=char*1;
				}
			}
		}
		if(sum%10==0){
			throw "This personal number is valid";
		}
		else{
			throw "This personal number is not valid";
		}
	}/*else{
			alert("Fel! personnumer måste vara 10 eller 12 siffror.");
		}*/
}
catch(err) {
	message.innerHTML = "Input is: " + err;
}
}

function myFunction2() {
	var message, x;
	message = document.getElementById("leapYearResult");
	message.innerHTML = "";
	x = document.getElementById("leapYear").value;

	try { 
		if(x == "")  throw "is Empty";
		if(isNaN(x)) throw "not a number";
		if((x % 4 === 0) && (x % 100 !== 0) ||
					(x % 400 == 0))   throw "Leap year";
		else throw "Not Leap year"; 
	}
	catch(err) {
		message.innerHTML = "Input is: " + err;
	}
}

function myFunction3() {
	var message, x,n,sum,y;
	message = document.getElementById("numberSumResult");
	message.innerHTML = "";
	x = document.getElementById("numberSum").value;
	sum=0;

	while(x){
		sum += x%10;
		x=Math.floor(x/10);
	}

	try { 
		throw sum;
		if(isNaN(x)) throw "Not a number";
	}
	catch(err) {
		message.innerHTML = "Input is: " + err;
	}
}
