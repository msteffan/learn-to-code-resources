var API_KEY = "9f5d59f500ea4ddb8bc1ba9fab55c64e";
var URL =  "https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=9f5d59f500ea4ddb8bc1ba9fab55c64e";

var request = new XMLHttpRequest();

request.addEventListener('load', function(){
  document.getElementById('stories')
          .innerHTML = this.response; 

});

request.open('GET', URL);
request.send( );
