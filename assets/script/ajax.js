//Se till så att loadweather triggas när fönstret
//har laddats med hjälp av window.onload
window.onload = loadWeather();

function loadWeather(){
	//Har skapar vi själva "AJAX" objektet
	var xhttp = new XMLHttpRequest();

	//Denna funktion/property anropas när
	//AJAX Objektet skickar sin request
	xhttp.onreadystatechange = function (){
		//readyState: 4 betyder att sidan är redo att rendera
		//status: 200 betyder att svaret är "okej", dvs. datan
		//skickades korrekt
		if(this.readyState === 4 && this.status === 200){

			display(this.responseText);

			var json =JSON.parse(this.responseText);
			//display(json.rating);
			//display(json.votes);

		}
	}

	//Här öppnar vi anslutningen mot API:et, där vi hämtar vårt
	//JSON objekt
	xhttp.open("GET",
												"https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor",
												true);

	//Här startar vi vår "parallela" händelse
	xhttp.send();
}

function getVote(int) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function() {
		if (this.readyState==4 && this.status==200) {

			//display(this.responseText);
			document.getElementById("starRating").innerHTML=this.responseText;

		}
	}
	xmlhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor&rating="+int,true);
	xmlhttp.send();
}
