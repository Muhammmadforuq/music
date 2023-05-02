var swiper = new Swiper(".mySwiperhero", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-nexthero",
    prevEl: ".swiper-button-prevhero",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  // keyboard: true,
});



var swiper = new Swiper(".mySwiperUltimi", {
  // centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 10
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 5,
      spaceBetween: 20
    },
  },
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-nextultimi",
    prevEl: ".swiper-button-prevultimi",
  },
});
var swiper = new Swiper(".mySwiperpartner", {
  spaceBetween: 10,
  // centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 6,
      spaceBetween: 20
    },
  },
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination2",
  },
  navigation: {
    nextEl: ".swiper-button-nextpart",
    prevEl: ".swiper-button-prevpart",
  },
});
