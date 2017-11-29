$(document).ready(function() {

	$('#fullpage').fullpage({
    anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page', '7Page', '8Page', '9Page'],
    menu: '#js-menu',
    autoScrolling: false,
    // fitToSection: false,
    scrollingSpeed: 1200
  });

  $(window).on('scroll',function(){
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header")
    if(scrollDistance >80 ){
      $header.addClass("header-scrolling")
    }
    else{
      $header.removeClass("header-scrolling")
    }
  });

  if(screen.width > 768 ){
    console.log("good")
    var rellax = new Rellax('.rellax',{
      center: true
    });
  }

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText:[],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
      }

    }
  });



});



