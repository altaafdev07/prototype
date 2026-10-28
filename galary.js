
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll(".gallery article");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute(
        "aria-pressed",
        String(item === button)
      );
    });

    galleryItems.forEach(item => {
      const category = item.dataset.category;
      item.hidden = filter !== "all" && category !== filter;
    });
  });
});

const allButton = document.querySelector('[data-filter="all"]');

if (allButton) {
  allButton.classList.add("active");
  allButton.setAttribute("aria-pressed", "true");
}
