import "swiper/scss";
import "./main.scss";
import Swiper from "swiper";
new Swiper(".reviews__slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  breakpoints: {
    576: {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 26,
      loop: true,
    },
    1240: {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
    },
  },
});
