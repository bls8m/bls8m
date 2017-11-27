$(document).foundation()

console.log( "complete" );

// Using XMLHttpRequest
// $.getJSON("https://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:"Red Sea clownfish", prop:"text"}, function(data) {console.log(data);});


$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=Te&format=json&callback=?", function(data) {

  console.log(data);

})
  .done(function() {
    // console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    // console.log( "complete" );
  });
