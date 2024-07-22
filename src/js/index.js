"use strict";
import Swiper from "swiper";
import "swiper/css";

new Swiper(".reviews__slider", {
  scrollbarHide: true,
  slidesPerView: "auto",
  freeMode: true,
  freeModeSticky: true,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});
