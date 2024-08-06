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
