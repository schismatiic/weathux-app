import "./styles.css";
import { renderInfo } from "./renderInfo.js";
//   ===============================================================================================
//   DOM elements
const search__button = document.getElementById("search__button");
const main__content = document.getElementById("main__content");
//   ===============================================================================================
//   State
renderInfo(main__content, search__button);
