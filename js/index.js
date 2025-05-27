// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 3,
//     spaseBetween: 60,

    

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//         // type: 'fraction',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },



//     // touchRation: 1,

//     // grabCursor: true,

//     // keyboard: {
//     //     enable: true,
//     //     onlyInViewport: true,
//     //     pageUpDown: true,
//     // },

//     mousewheel: {
//         sensitivity: 1,
//     },

//     avtoHeight: true,

//     effect: 'coverflow',

//     coverflowEffect: {
//         rotate: 20,
//         stretch: 50,
//         sliderShadows: true,
//     }

// });

const swiper = new Swiper(".swiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".swiper", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

