window.onload = displayLoader();

function displayLoader(){

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function (){

		if(this.readyState === 4 && this.status === 200){
			var json = JSON.parse(this.responseText);

			var ratingtofixed = json.rating.toFixed(3);
			document.getElementById("votesmessage").innerText = "Recipe: " + json.recipe + ". Votes: " + json.votes + " Rating:  " + ratingtofixed;
		}
	}

	xhttp.open("GET",
												"https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor",
												true);

	xhttp.send();
}

function getVote(int) {

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {
		if (this.readyState==4 && this.status==200) {
			displayLoader();
			display(int);
			localStorage.data = "votes is: "+int;
		}
	}
	xmlhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor&rating="+int,true);
	xmlhttp.send();

}
function display(value){
	document.getElementById("uservotes").innerText = "Your votes is: " + value;
}
