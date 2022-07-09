$(document).ready(function () {
  $(".loading").fadeOut();

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "f2f77eb8-77c5-4adc-b91f-8e9f9f6e5e47";
  (function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
});
let myAnimation = document.querySelectorAll(
  "*.dReveal,*.rReveal,*.lReveal,*.uReveal"
);
window.addEventListener("scroll", () => {
  myAnimation.forEach((e) => {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
});
window.onload = () => {
  setTimeout(() => {
    document.querySelectorAll(".landing * ").forEach((e) => {
      e.classList.add("reveal");
    });
  }, 500);
};
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});
