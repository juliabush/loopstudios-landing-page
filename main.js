const closeButton = document.getElementById("close-button");
const menuDropdown = document.getElementById("menu-button");

menuDropdown.addEventListener("click", () => {
  menuDropdown.classList.add("hidden");
  closeButton.classList.add("visible");
});
closeButton.addEventListener("click", () => {
  menuDropdown.classList.remove("hidden");
  closeButton.classList.remove("visible");
});
