import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// swiper
Swiper.use([Pagination, Navigation, Autoplay]);

new Swiper(".workers__swiper-container", {
  direction: "vertical",
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".workers__swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
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
