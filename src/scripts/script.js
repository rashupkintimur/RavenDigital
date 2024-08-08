import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");

// swiper
Swiper.use([Pagination, Navigation, Autoplay]);

new Swiper(".workers__swiper-container", {
  direction: "horizontal",
  spaceBetween: 50,
  loop: true,
  // autoplay: {
  //   delay: 7000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    1300: {
      direction: "vertical",
      pagination: {
        el: ".workers__swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
    },
  },
});

// burger
burger.addEventListener("click", () => {
  burger.classList.toggle("--active");
  nav.classList.toggle("--active");
});

// accordion
document.querySelector(".accordions").addEventListener("click", (event) => {
  const accordionButton = event.target.closest(".accordion__button");

  if (!accordionButton) return;

  const accordion = accordionButton.closest(".accordion");

  const accordionContent = document.querySelector(
    `.accordion__content[data-accordion="${accordionButton.dataset.accordion}"]`
  );

  if (accordionContent.classList.contains("--active")) {
    accordionContent.classList.remove("--active");
    accordion.classList.remove("--active");
    return;
  }

  accordionContent.classList.add("--active");
  accordion.classList.add("--active");
});
