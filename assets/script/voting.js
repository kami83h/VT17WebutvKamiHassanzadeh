function getVote(int) {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("poll").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor"+int,true);
  xmlhttp.send();
}

function updateVotingResult () {
    ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor",
        success: function(data) {
            //return data;
            var rating = data.rating.toFixed(1);
            (".rating strong").text(rating);
            (".rating em").text(data.votes);
            ("#wait").html("");
        },
    });
}
function putVoteInDB (rating) {
    ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=160ee6f54ffa7808&recipe=kanelkakor%C3%A5rta&rating=" + rating,
        success: function(data) {  
            updateVotingResult();
        }, 
    });
}
$(document).ready(function () {
    $(".starRating span").click(
        function () {
            $(this).prevAll().text("\u2605");
            $(this).text("\u2605");
            $(this).nextAll().text("\u2606");
            
            $(this).animate({fontSize: '2em'}, "slow");
            $(this).animate({fontSize: '1em'}, "slow");
            
            var rating = $(this).index() + 1;
            putVoteInDB(rating);
        }
    );
