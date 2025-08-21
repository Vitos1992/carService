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

// mob_menu

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


// animItems

let animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('._active');
      } else {
          animItem.classList.remove('._active');
      }

    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll(); 
  }, 300);
}

