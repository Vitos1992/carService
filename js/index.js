$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 1000,
    easing:'_lianer',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnFocusHover: true,
    pauseOnFocusHoverDots: true,
    draggable: false,
    waitForAnimate: false,
  });
});
  
