const renderWeather = (container, name, weather_description) => {
  //   ===============================================================================================
  //   Create element
  const weather_container = document.createElement("div");
  const city = document.createElement("h3");
  const description = document.createElement("p");
  //   ===============================================================================================
  //   Text content
  city.textContent = name;
  description.textContent = weather_description;
  //   ===============================================================================================
  //   Class name
  weather_container.className = "weather_container";
  //   ===============================================================================================
  //   Append child
  weather_container.appendChild(city);
  weather_container.appendChild(description);
  container.appendChild(weather_container);
};
export { renderWeather };
