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

const getWeather = async () => {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=XBDNEYJKWZJBCTZ6GWSDL9SPT",
  );
  const weatherData = await response.json();
  console.log(weatherData);
};
getWeather();
