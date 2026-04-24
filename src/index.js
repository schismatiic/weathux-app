import "./styles.css";
import { renderInfo } from "./modules/renderInfo.js";
import { renderWeather } from "./modules/renderWeather.js";

//   ===============================================================================================
//   DOM elements
const searchbar = document.getElementById("searchbar");
const search__button = document.getElementById("search__button");
const main__content = document.getElementById("main__content");
const loading_container = document.getElementById("loading");
const loading_text = document.createElement("p");
const tux = document.createElement("img");
//   ===============================================================================================
//   Event listeners
search__button.addEventListener("click", () => {
  const searchbar_value = searchbar.value;
  getWeather(searchbar_value);
});
searchbar.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchbar_value = searchbar.value;
    e.preventDefault();
    getWeather(searchbar_value);
  }
});
//   ===============================================================================================
//   Function calls
renderInfo(main__content, search__button, searchbar);

const getWeather = async (value) => {
  loading_text.textContent = "Loading...";
  loading_container.style.margin = "20px 0";
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
  loading_container.appendChild(loading_text);
  loading_container.appendChild(tux);
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?key=XBDNEYJKWZJBCTZ6GWSDL9SPT`,
  );
  loading_container.style.margin = "0";
  loading_container.removeChild(loading_text);
  loading_container.removeChild(tux);
  const weatherData = await response.json();
  renderWeather(
    main__content,
    weatherData.address,
    weatherData.currentConditions.temp,
    weatherData.currentConditions.conditions,
    weatherData.description,
  );
};
