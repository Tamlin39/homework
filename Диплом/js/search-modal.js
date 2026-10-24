(() => {
  const searchButton = document.querySelector(".header__buttons-search");

  const searchModal = document.querySelector("#search-modal");
  const closeButton = document.querySelector(".search-modal__close");
  const searchInput = document.querySelector(".search-modal__input");

  searchButton.addEventListener("click", () => {
    searchModal.classList.add("search-modal--active");
    searchInput.focus();
  });

  closeButton.addEventListener("click", () => {
    searchModal.classList.remove("search-modal--active");
  });

  searchModal.addEventListener("click", (event) => {
    if (event.target === searchModal) {
      searchModal.classList.remove("search-modal--active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchModal.classList.remove("search-modal--active");
    }
  });
})();
