(function(){

  "use strict"

  // navigation fixed to top function you can modify it 
  var navigation = $('.header').offset().top + 8;

  $(document).scroll(function(){  
    if($(this).scrollTop() > navigation){
      $('nav').addClass('navbar-default-mini');
      $('.navbar-right').css({
        'margin-top':'10px'
      });
      $('.navbar-brand').css({
        'padding-top':'25px'
      });
      $('.navbar-toggle').css({
        'margin-top':'17px'
      });
    }
    else
    {
      $('nav').removeClass('navbar-default-mini');
      $('.navbar-right').css({
        'margin-top':'28px'
      });
      $('.navbar-brand').css({
        'padding-top':'42px'
      });
       $('.navbar-toggle').css({
        'margin-top':'32px'
      });
    }
  });

  // header section backstretch carousel 
  // image flipper header section (backstrech plugin jquery)

   $(".header").backstretch([
      "assets/carousel/image1.jpg",
      "assets/carousel/image2.jpg",
      "assets/carousel/image3.jpg"
      ], {
        fade: 750,
        duration: 4000
      }); 
  
   // wow js
   new WOW().init();

   // custom active switcher of portfolio menu line 349 index.html

   $('.portfolioMenu li').on('click',function(e){
    e.preventDefault();
    $(this).addClass('activePortfolioMenuItem').siblings().removeClass('activePortfolioMenuItem');
   });  

   // navigation scroll 

    // navigation scroll/swing code you can customize it 

    $(".scroll").on('click',function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top - 70;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

   // mixitup plugin 

  $(function(){

    // Instantiate MixItUp:

    $('#Container').mixItUp();

  });

  // maginific popup for portfolio section

  $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

  // image1
  $('.image1MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/1.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image2MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/2.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image3MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/3.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image4MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/4.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image5MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/5.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image6MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/6.jpg'
      },
      type: 'image' // this is default type
  });
   // image1
  $('.image7MagnificPopUp').magnificPopup({
      items: {
        src: 'assets/portfolio/7.jpg'
      },
      type: 'image' // this is default type
  });

 // google maps

    // googleMaps you can customize it from https://snazzymaps.com/
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            // How zoomed in you want the map to start at
            zoom: 14,

            // The latitude and longitude to center the map
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles:[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
          };

          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.6700, -73.9400),
              map: map,
              title: 'Snazzy!'
          });
      }


// end google maps



})(jQuery);