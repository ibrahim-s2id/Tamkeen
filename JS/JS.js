// slider 1
// video popup open and close
const btn = document.querySelector('#vi');
const btn2 = document.querySelector('#vi2');

const videocon = document.querySelector('.video-container');
const video = document.querySelector('.video-container iframe');
const close = document.querySelector('.video-container>div:first-child');
btn.addEventListener('click', () => {
  videocon.classList.add('show');
})
btn2.addEventListener('click', () => {
  videocon.classList.add('show');
})
close.addEventListener('click', () => {
  videocon.classList.remove('show');
})
$(window).scroll(function () {
  videocon.classList.remove('show');
});

// slider 2

var slider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  roundLengths: true,

  loopedSlides: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var $swiper = $(".gallery-thumbs");
var $bottomSlide = null;

$(document).ready(function () {
  var $swiper = $(".gallery-thumbs");
  var $bottomSlide = null; 
  var $bottomSlideContent = null; 

  var thumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopedSlides: 3,
    loopAdditionalSlides: 10,

    breakpoints: {
      200: {
        slidesPerView: 3,
        spaceBetween: 20,
        loopedSlides: 3,
      },
      680: {
        spaceBetween: 1,
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;
