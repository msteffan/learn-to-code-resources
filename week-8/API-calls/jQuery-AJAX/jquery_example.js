$( document ).ready( function(){
  var URL =  "https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=9f5d59f500ea4ddb8bc1ba9fab55c64e";
  $.ajax({
    url: URL,
    method: "GET",
    success: function( data ){
      var articles = data.articles;
      for(var i = 0; i < articles.length; i ++){
        var articleTitle = $('<h4></h4>').text( articles[i].title );
        var description = $('<p></p>').text( articles[i].description );
        var readMoreLink = $('<a>Read More</a>').attr('href', articles[i].url);
        $('#stories').append(articleTitle, description, readMoreLink);
      }
    },
    fail: function( error ){
      console.error( error );
    }
  });
});
