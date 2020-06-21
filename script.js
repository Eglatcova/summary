"use strict";
//тетрис
const tetris = () => {
  const tetris1 = document.querySelector(".skills__plus"),
    tetris2 = document.querySelector(".skills__basis"),
    tetris3 = document.querySelector(".skills__additional"),
    box = document.querySelector(".skills__figures"),
    boxTitle = document.querySelector(".skills__main-title");

  let flag = true;

  window.addEventListener("scroll", () => {
    let forScroll = boxTitle.getBoundingClientRect();
    forScroll = forScroll.top + window.pageYOffset;

    if (window.pageYOffset >= 2200) {
      if (flag === true) {
        window.scrollTo({ top: forScroll, behavior: "smooth" });
        flag = false;
      }

      tetris1.style.display = "block";

      setInterval(() => {
        tetris2.style.display = "block";
      }, 2000);

      setInterval(() => {
        tetris3.style.display = "block";
      }, 4000);
    }
  });
};

//кнопки "кратко о проекте"
const aboutProject = () => {
  const box = document.querySelector(".portfolio"),
    buttons = document.querySelectorAll(".website__btn-info"),
    svg = document.querySelectorAll(".website__svg"),
    info = document.querySelectorAll(".website__info");

  box.addEventListener("click", () => {
    let target = event.target;

    buttons.forEach((elem, index, arr) => {
      if (arr[index] === target.closest(".website__btn-info")) {
        info[index].classList.toggle("website__info--show"),
          svg[index].classList.toggle("website__svg--up");
      }
    });
  });
};

tetris();
aboutProject();
