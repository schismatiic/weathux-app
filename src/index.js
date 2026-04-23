import "./styles.css";
import { renderInfo } from "./modules/renderInfo.js";
//   ===============================================================================================
//   DOM elements
const search__button = document.getElementById("search__button");
const main__content = document.getElementById("main__content");

renderInfo(main__content, search__button);
