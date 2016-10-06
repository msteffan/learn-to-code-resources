var API_KEY = "9f5d59f500ea4ddb8bc1ba9fab55c64e";
var URL =  "https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=9f5d59f500ea4ddb8bc1ba9fab55c64e";

var request = new XMLHttpRequest();

request.addEventListener('load', function(){
  var jsonObject = JSON.parse( this.response );
  var articles = jsonObject.articles;
  var storiesDiv = document.getElementById('stories');
  for(var i = 0; i < articles.length; i ++){
    storiesDiv.innerHTML += "<h4>" + articles[i].title + "</h4>";
    storiesDiv.innerHTML += "<p>" + articles[i].description + "</p>";
    storiesDiv.innerHTML += "<a href=" + articles[i].url + ">Read more</a>";
  }
});

request.open('GET', URL);
request.send( );
