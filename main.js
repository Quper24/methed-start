import "swiper/scss";
import "./main.scss";
import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".reviews__slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    simulateTouch: true,
    touchRatio: 1.5,
    touchAngle: 45,
    touchStartPreventDefault: false, // изменено на false
    touchReleaseOnEdges: true,
    passiveListeners: true,
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

  const dateStartElem = document.querySelector("#date-start");
  const dateStart = dateStartElem ? dateStartElem.value : "2024-07-28";
  const endTime = new Date(dateStart);

  const declOfNum = (n, titles) =>
    n +
    " " +
    titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ];

  function formatDateRange(startDate) {
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = monthNames[start.getMonth()];
    const endMonth = monthNames[end.getMonth()];

    if (start.getMonth() === end.getMonth()) {
      return `${startDay}-${endDay}&nbsp;${startMonth}`;
    } else {
      return `${startDay}&nbsp;${startMonth} - ${endDay}&nbsp;${endMonth}`;
    }
  }

  const formattedDateRange = formatDateRange(dateStart);

  const dateCourseElems = document.querySelectorAll(".date-course");
  dateCourseElems.forEach((elem) => {
    elem.innerHTML = formattedDateRange;
  });

  // Timer
  const timerElement = document.querySelector(".timer");

  function updateTimer() {
    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      timerElement.textContent = "00ч 00м 00с";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    let timerText = "";
    if (days > 0) {
      timerText += declOfNum(days, ["день", "дня", "дней"]) + " ";
    }
    timerText += `${hours.toString().padStart(2, "0")}ч `;
    timerText += `${minutes.toString().padStart(2, "0")}м `;
    timerText += `${seconds.toString().padStart(2, "0")}с`;

    timerElement.textContent = timerText.trim();
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
});
