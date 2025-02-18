 import Swiper from 'swiper/bundle';
 const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
  },
});