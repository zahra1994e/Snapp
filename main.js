const menu = document.querySelector(".header__nav-mobile-hamb");
const mul = document.querySelector(".close-hamb");
const items = document.querySelector(".header__nav-mobile-items");
const download = document.querySelector(".header__nav-mobile-downloads-items");
const title = document.querySelector(".header__nav-mobile-downloads-titr");
const arrow = document.querySelector(".header__nav-mobile-downloads-arrow");
const btns = document.querySelectorAll(".slide-btn");
const slide = document.querySelectorAll(".slides__item");
const slides = document.querySelector(".slides");
let index;
let currentSlide;
menu.addEventListener("click", () => {
  items.style.right = "0";
  menu.classList.toggle("hidden");
  mul.classList.toggle("hidden");
});
mul.addEventListener("click", () => {
  items.style.right = "-100%";
  menu.classList.toggle("hidden");
  mul.classList.toggle("hidden");
});
title.addEventListener("click", () => {
  download.classList.toggle("hidden");
  arrow.classList.toggle("close-arrow");
  download.style.top = "7rem";
});
btns.forEach((item, index) =>
  item.addEventListener("click", function () {
    slide.forEach(item => item.classList.remove("active"))
    index = index;
    btns.forEach(function (item, indx) {
      if (indx === index) {
        item.style.backgroundColor = "white";
        slide[index].classList.add("active")
      } else {
        item.style.backgroundColor = "rgba(255, 255, 255, 0.447)";
      }
    });
  })
);
