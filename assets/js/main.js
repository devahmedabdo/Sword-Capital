$(document).ready(function () {
  $(".loading").fadeOut();
  $(".info").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".responsive").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
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
