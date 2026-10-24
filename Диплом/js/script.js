const tagsContainer = document.querySelector("#tags");
const searchInput = document.querySelector(".search__input--seacrh");

buttons.forEach((button) => {
  const element = document.createElement("button");

  element.type = "button";
  element.classList.add("tag");
  element.textContent = button;

  element.addEventListener("click", () => {
    searchInput.value = button;
    searchInput.focus();
  });

  tagsContainer.appendChild(element);
});
