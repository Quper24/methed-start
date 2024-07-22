import "./main.scss";

import Swiper from "swiper";
import "swiper/scss";

new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    620: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    980: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
