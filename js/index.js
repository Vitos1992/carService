$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    easing: "_lianer",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnFocusHover: true,
    pauseOnFocusHoverDots: true,
    draggable: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  });
});

const d = document.querySelector("[data-menu]"),
  y = document.querySelector("[data-menu-open]"),
  a = document.querySelector("body"),
  f = document.querySelector("[data-menu-close]"),
  g = document.querySelectorAll(".nav_item__mob"),
  s = () => {
    d.classList.toggle("is-hidden"), a.classList.toggle("body");
  };
y.addEventListener("click", s);
f.addEventListener("click", s);
g.forEach((o) => o.addEventListener("click", s));
window.matchMedia("(min-width: 768px)").addEventListener("change", (o) => {
  o.matches && (d.classList.add("is-hidden"), a.classList.remove("body"));
});
