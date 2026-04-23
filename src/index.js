import "./styles.css";
import { renderInfo } from "./modules/renderInfo.js";
//   ===============================================================================================
//   DOM elements
const searchbar = document.getElementById("searchbar");
const search__button = document.getElementById("search__button");
const main__content = document.getElementById("main__content");
//   ===============================================================================================
//   Event listeners
search__button.addEventListener("click", () => {
  const searchbar_value = searchbar.value;
  console.log(searchbar_value);
});
//   ===============================================================================================
//   Function calls
renderInfo(main__content, search__button);
