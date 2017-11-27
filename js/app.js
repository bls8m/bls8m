
var sectonScrolOffset =3;




$(document).foundation();

function getRootElementFontSize( ) {
    // Returns a number
    return parseFloat(
        // of the computed font-size, so in px
        getComputedStyle(
            // for the root <html> element
            document.documentElement
        )
        .fontSize
    );
}
function convertRem(value) {
    return value * getRootElementFontSize();
}

function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}


function set_image(feature, ok){
  var path='https://hieber.xyz/img/';

  var q_lossles="_lossles";
  var q_loss100="_loss100";
  var q_loss80="_loss80";
  var q_png="_png";

  var filename_face='dog';
  var filename_back='back';
  var face_url="";
  var back_url="";
  var face_url_fallback="";
  var back_url_fallback="";

  if (Foundation.MediaQuery.atLeast('large'))  {
    face_url=path+filename_face+q_lossles+".webp";
    face_url_fallback=path+filename_face+q_png+".png";

    back_url=path+filename_back+q_lossles+".webp";
    back_url_fallback=path+filename_back+q_png+".png";
  }
  else if (Foundation.MediaQuery.atLeast('medium'))  {
      face_url=path+filename_face+q_loss100+".webp";
      face_url_fallback=path+filename_face+q_png+".png";

      back_url=path+filename_back+q_loss100+".webp";
      back_url_fallback=path+filename_back+q_png+".png";
  }
  else{
    face_url=path+filename_face+q_loss80+".webp";
    face_url_fallback=path+filename_face+q_png+".png";

    back_url=path+filename_back+q_loss80+".webp";
    back_url_fallback=path+filename_back+q_png+".png";
  }

  if(ok==false){
    $('.parallax-window').parallax({imageSrc: back_url_fallback});
    $('#me-pic').attr("src", face_url_fallback);
  }
  else {
    $('.parallax-window').parallax({imageSrc: back_url});
    $('#me-pic').attr("src", face_url);
    // alert("ok");
  }
  setupAbutMe();
}
check_webp_feature("lossy",set_image);





function showHideMenue() {
    var x = document.getElementById("menueMobileBar");
    if (x.style.display === "none") {
        x.style.display = "block";


    } else {
        x.style.display = "none";

    }
}



function whichMenue2Display(){
  var x = document.getElementById("menueDesktop");
  var y = document.getElementById("menueMobile");
  var z = document.getElementById("menueMobileBar");

  if (Foundation.MediaQuery.atLeast('large'))  {
    y.style.display = "block"
    x.style.display = "none"
    z.style.display = "none"

  }
  else{
    y.style.display = "none"
    x.style.display = "block"
    z.style.display = "none"

  }
}

$('.title-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})






function setupAbutMe(){

  whichMenue2Display();

  var picSize=$("#me-pic").height();



  var page_height=$(window).height();
  var picSize=$("#me-pic").height();

  if (Foundation.MediaQuery.atLeast('large'))  {


    $(".parallax-window ").css("height",page_height*(15/30));
    $("#me-pic").css("height","22em");
    picSize=$("#me-pic").height();
    $(".ofset").css("margin-top",-picSize/2);

    $("#about-me-y-grid").css("height","100%");
    $("#about-me-y-grid").css("min-height","initial");
    $("#about-me-name-txt").css("text-align","left");


  }
  else{

      $("#me-pic").css("height","12em");
      picSize=$("#me-pic").height();
      $(".ofset").css("margin-top",-picSize/2);

      $(".parallax-window").css("height",page_height*(10/30));


      $("#about-me-y-grid").css("height","initial");
      $("#about-me-y-grid").css("min-height","100%");
      $("#about-me-name-txt").css("text-align","center");


  }



    $("#me-pic").css("width",picSize);
    $(".ofset").css("margin-top",-picSize/2);

}


$( "document").ready(function() {

  $("#abut-me-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#top-ptr').offset().top// or 10
    }, 1000);
  });

  $("#my-projects-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#myProjects').offset().top - convertRem(3) // or 10
    }, 1000);
  });

  $("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#Contact').offset().top - convertRem(3) // or 10
    }, 1000);
  });




  $("#abut-me-button-responsiv").click(function() {
    $('html, body').animate({
        scrollTop: $('#top-ptr').offset().top// or 10
    }, 1000);
  });

  $("#my-projects-button-responsiv").click(function() {
    $('html, body').animate({
        scrollTop: $('#myProjects').offset().top - convertRem(6.2) // or 10
    }, 1000);
  });

  $("#contact-button-responsiv").click(function() {
    $('html, body').animate({
        scrollTop: $('#Contact').offset().top - convertRem(6.2) // or 10
    }, 1000);
  });

});

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
  check_webp_feature("lossy",set_image);

  setupAbutMe();

});
