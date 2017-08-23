//SLIDESHOW
$(function () {
  $("#slider3").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 1000,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

});

//SCROLL MENU
$(document).ready(function () {

  $('.smooth-slide').click(function (e) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();

  })

});

//GOOGLE MAPS
function initMap() {
  var lublin = {lat: 51.247, lng: 22.564};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: lublin
  });
  var marker = new google.maps.Marker({
    position: lublin,
    map: map
  });
};

// const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#32a095",
        "text": "#ffffff"
      },
      "button": {
        "background": "#1dcb8b;",
        "border": "#000"
      }
    },
    "position": "bottom-right",
    "content": {
      "message": "Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych.",
      "dismiss": "AKCEPTUJĘ!",
      "link": "Dowiedz się więcej!"
    }
  })
});
