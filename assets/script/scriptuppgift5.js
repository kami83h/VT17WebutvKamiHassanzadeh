
function myFunction1() {
	var message,i,del;
	message = document.getElementById("idNumberResult");
	message.innerHTML = "";
	var x = document.getElementById("idNumber").value;
	var sum=-1;

	try { 
		if(x == "")  throw "is Empty";
		if(isNaN(x)) throw "not a number";
		
		for(var i=0;i<x.length;i++){

			if(x.length[i] %2){
				if(x[i]*2 >=10){
					sum += x[i]-9;
				}
				else{
					sum +=x[i]*2;
				}
			}
			else{
				if(x[i]*1 >=10){
					sum +=x[i]-9;
				}
				else{
					sum +=x[i]*1;
				}
			}
		}
		if(sum%2==0){
			throw "This personal number is valid";
		}
		else{
			throw "This personal number is not valid";
		}
		
	}
	catch(err) {
		message.innerHTML = "Input is " + err;
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
