$(document).ready(function() {
  $("#generateQuote").click(function() {
    $("#quote").transition("pulse");
    
    $.ajax({type: "GET",
            crossDomain : true,
            url: "https://api.forismatic.com/api/1.0/",
            data: {method: "getQuote",format: "jsonp",lang: "en"},
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "printQuote"
    });
  });

  $("#tweet").click(function(){
    var tweetText = $(".words").text();
    var tweetAuthor = $(".author").text();
    window.open('https://twitter.com/intent/tweet?text="' + tweetText + '"' + tweetAuthor);
  }); 
});

function printQuote(response){
  console.log(response);
  $(".words").html(response.quoteText);
  if (response.quoteAuthor) {
    $(".author").html(" -" + response.quoteAuthor);
  } else {
    $(".author").html(" -Unknown");
  }  
}


