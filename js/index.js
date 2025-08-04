$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    easing:'_lianer',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnFocusHover: true,
    pauseOnFocusHoverDots: true,
    draggable: false,
    waitForAnimate: false,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  });
});
  


(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
  }
})();
