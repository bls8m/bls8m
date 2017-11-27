$(document).foundation()


var latitude=0;
var longitude=0;

var tempC=0;
var tempSel="c";

function getTemp(){

  var result=0.0;
  if(tempSel=='c'){
    result= tempC;
  }
  else{
    result = tempC*(9/5) + 32;
  }

  return Math.round(result * 100) / 100;

}

var weatherIcon = {
  "clear sky" : '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>',
  "few clouds" : '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div><div class="sun"><div class="rays"></div></div></div>',
  "scattered clouds" : '<div class="icon cloudy"><div class="cloud"></div></div>',
  "broken clouds" : '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>',
  "shower rain": '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>',
  "rain" : '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>',
  "thunderstorm" : '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>',
  "snow" : '<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>',
  "mist" : '<div class="icon cloudy"><div></div><div class="cloud"></div></div>',
  "01d" : '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>',
  "02d" : '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div><div class="sun"><div class="rays"></div></div></div>',
  "03d" : '<div class="icon cloudy"><div class="cloud"></div></div>',
  "04d" : '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>',
  "09d": '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>',
  "10d" : '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>',
  "11d" : '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>',
  "13d" : '<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>',
  "50d" : '<div class="icon cloudy"><div></div><div class="cloud"></div></div>'
};




if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
  $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);






  $.getJSON( "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=72df659a7bc4adb6115e36ebc7163471", function(data) {

    var weather=data.weather[0].description;
    // var weatherI=data.weather[0].description;
    var temp=data.main.temp;
    var iconApiData=data.weather[0].icon;
    tempC=temp-273.15;  //covert Kelvin to Celsius
    console.log( weather);
    console.log( getTemp(tempC) );
    console.log(weatherIcon[weather])

    $("#weather").html(weather);
    $("#weatherIcons").html(weatherIcon[iconApiData]);
    $("#temp").html(getTemp(temp));

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

$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key=AIzaSyDK9YGY8-Hjmkf9tvibt3u2Ai7fL5RRp_M", function(data) {
        var result =data.results;
        var suburb=data.results[2].address_components[0].short_name;
        var city=data.results[3].address_components[0].short_name;
        var state=data.results[7].address_components[0].short_name;
        console.log( suburb );
        console.log( city );
        console.log( state );

        $("#geoPlace").html(suburb+", "+city+", "+state);


        // console.log( data.results);
        // console.log( "b"+data.results.components.state);
        // console.log( "c"+data.results.components.suburb);
      })
        .done(function() {
          // console.log( "aaaaasecond success" );
        })
        .fail(function() {
          console.log( "error" );
        })
        .always(function() {
          // console.log( "complete" );
        });



});
}






    $( document ).ready(function() {

        $("#CorF").click(function(){
          if($("#tempc").hasClass("textWhite")){
            tempSel="f";
            $("#tempc").removeClass("textWhite");
            $("#tempf").removeClass("textGray");
            $("#tempc").addClass("textGray");
            $("#tempf").addClass("textWhite");
            $("#temp").html(getTemp(temp));
          }
          else{
            tempSel="c";
            $("#tempc").removeClass("textGray");
            $("#tempf").removeClass("textWhite");
            $("#tempc").addClass("textWhite");
            $("#tempf").addClass("textGray");
            $("#temp").html(getTemp(temp));
          }
        });

        console.log( "ready!" );
    });
