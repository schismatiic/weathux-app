import "./styles.css";
import { renderInfo } from "./modules/renderInfo.js";
import { renderWeather } from "./modules/renderWeather.js";

//   ===============================================================================================
//   DOM elements
const searchbar = document.getElementById("searchbar");
const search__button = document.getElementById("search__button");
const main__content = document.getElementById("main__content");
//   ===============================================================================================
//   Event listeners
search__button.addEventListener("click", () => {
  const searchbar_value = searchbar.value;
  getWeather(searchbar_value);
});
//   ===============================================================================================
//   Function calls
renderInfo(main__content, search__button);

const getWeather = async (value) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?key=XBDNEYJKWZJBCTZ6GWSDL9SPT`,
  );
  const weatherData = await response.json();
  renderWeather(
    main__content,
    weatherData.address,
    weatherData.currentConditions.temp,
    weatherData.currentConditions.conditions,
    weatherData.description,
  );
  console.log(weatherData);
};
