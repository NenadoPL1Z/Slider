const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidsCount = mainSlide.querySelectorAll("div").length;
sidebar.style.top = `-${(slidsCount - 1) * 100}vh`;
const container = document.querySelector(".container");

let activeSlideIndex = 0;

upButton.addEventListener("click", () => changeSlide("down"));

downButton.addEventListener("click", () => changeSlide("up"));

function changeSlide(direction) {
  if (direction === "down") {
    activeSlideIndex++;
    if (activeSlideIndex === slidsCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "up") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidsCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
