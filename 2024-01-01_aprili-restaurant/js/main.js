import { ThemeManager } from "./ThemeManager.js";
import { dishesArray } from "./dishesArray.js";

// || THEMING
const themeManager = new ThemeManager();

document.addEventListener("DOMContentLoaded", () => {
  themeManager.setBodyThemeViaClassUponInitialization.bind(themeManager);
});

window.addEventListener("load", () => {
  // removes load spinner on load
  document.querySelector(".spinner-container").remove();
});

const themeToggleButton = document.querySelector(
  ".header-component__theme-toggle",
);

themeToggleButton.addEventListener("click", () => themeManager.toggleTheme());

// || dishes array grid
const dishesGridSection = document.querySelector(".main__dishes-grid");

function renderDishesInGrid(dishes) {
  dishesGridSection.innerHTML = "";

  for (let dish of dishes) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("main__dishes-grid__grid-item");

    // Grid item name
    const gridItemName = document.createElement("div");
    gridItemName.classList.add("main__dishes-grid__grid-item__text");
    gridItemName.textContent = `${dish.name} - ${dish.price} ${dish.priceCurrency}`;

    // Image container and image
    const gridItemImgContainer = document.createElement("div");
    const gridItemImg = document.createElement("img");
    gridItemImg.setAttribute("src", dish.relative_url);
    gridItemImgContainer.append(gridItemImg);

    gridItem.append(gridItemName, gridItemImgContainer);
    dishesGridSection.append(gridItem);
  }
}
renderDishesInGrid(dishesArray);

const dishesSearchInput = document.querySelector(".dishes-search-input");
dishesSearchInput.addEventListener("input", () => {
  const searchValue = dishesSearchInput.value.toLowerCase();
  const filteredDishes = dishesArray.filter((dish) =>
    dish.name.toLowerCase().includes(searchValue),
  );
  renderDishesInGrid(filteredDishes);
});
