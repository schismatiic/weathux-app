import weather_hail_icon from "../assets/weather_hail.svg";

const renderInfo = (container, searchbutton, keydown) => {
  //   ===============================================================================================
  //   Variables
  let toggle = true;
  //   ===============================================================================================
  //   Create element
  const weather_hail = document.createElement("img");
  const info__box = document.createElement("div");
  const info__title = document.createElement("h3");
  const info__p = document.createElement("p");
  //   ===============================================================================================
  //   Text content
  info__title.textContent = "Info";
  info__p.textContent =
    "A simple weather forecast web app built with JavaScript that fetches real-time data from the Visual Crossing API. Users can search for any location, toggle between Celsius and Fahrenheit, and view dynamic UI updates based on current weather conditions, with optional GIF integration for added visual feedback.";
  //   ===============================================================================================
  //   Class name
  info__box.className = "info__box";
  info__title.className = "info__title";
  info__p.className = "info__p";
  weather_hail.className = "weather_hail";
  //   ===============================================================================================
  //   Src
  weather_hail.src = weather_hail_icon;
  //   ===============================================================================================
  //   Append child
  info__box.appendChild(info__title);
  info__box.appendChild(weather_hail);
  info__box.appendChild(info__p);
  container.appendChild(info__box);
  //   ===============================================================================================
  //   Event listener
  searchbutton.addEventListener("click", () => {
    if (toggle) {
      info__box.removeChild(info__title);
      info__box.removeChild(info__p);
      container.removeChild(info__box);
      toggle = false;
    }
  });
  searchbar.addEventListener("keydown", (e) => {
    if (toggle) {
      if (e.key === "Enter" || e.keyCode === 13) {
        e.preventDefault();
        info__box.removeChild(info__title);
        info__box.removeChild(info__p);
        container.removeChild(info__box);
        toggle = false;
      }
    }
  });
};
export { renderInfo };
