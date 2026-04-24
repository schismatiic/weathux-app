let cont = 0;
const renderWeather = (
  container,
  name,
  temp,
  weather_conditions,
  weather_description,
  toggle,
) => {
  if (cont === 0) {
    cont++;
    console.log(cont);
    //   ===============================================================================================
    //   Variables
    let celsius = Math.round((5 / 9) * (temp - 32));
    let toggle_units = true;
    let isRender = false;
    //   ===============================================================================================
    //   Create element
    const weather_container = document.createElement("div");
    const city = document.createElement("h3");
    const temperature = document.createElement("h4");
    const conditions = document.createElement("p");
    const description = document.createElement("p");
    const units__button = document.createElement("button");
    //   ===============================================================================================
    //   Text content
    city.textContent = name;
    temperature.textContent = `${celsius}°C`;
    conditions.textContent = weather_conditions;
    description.textContent = weather_description;
    units__button.textContent = "Change units to °F";
    weather_container.textContent = "";
    //   ===============================================================================================
    //   Class name
    weather_container.className = "weather_container";
    city.className = "city";
    temperature.className = "temperature";
    conditions.className = "conditions";
    description.className = "description";
    units__button.className = "units__button";
    //   ===============================================================================================
    //   Append child
    weather_container.appendChild(city);
    weather_container.appendChild(temperature);
    weather_container.appendChild(conditions);
    weather_container.appendChild(description);
    weather_container.appendChild(units__button);
    container.appendChild(weather_container);
    //   ===============================================================================================
    //   Event listeners
    units__button.addEventListener("click", () => {
      if (toggle_units) {
        units__button.textContent = "Change units to °C";
        temperature.textContent = `${temp}°F`;
        toggle_units = false;
      } else {
        temperature.textContent = `${celsius}°C`;
        units__button.textContent = "Change units to °F";
        toggle_units = true;
      }
    });
  } else if (cont > 0) {
    //   ===============================================================================================
    //   Variables
    let celsius = Math.round((5 / 9) * (temp - 32));
    let toggle_units = true;
    //   ===============================================================================================
    //   Query selector
    const newCity = document.querySelector(".city");
    const newTemperature = document.querySelector(".temperature");
    const newConditions = document.querySelector(".conditions");
    const newDescription = document.querySelector(".description");
    const units__button = document.querySelector(".units__button");
    //   ===============================================================================================
    //   Text content
    newCity.textContent = name;
    newTemperature.textContent = `${celsius}°C`;
    newConditions.textContent = weather_conditions;
    newDescription.textContent = weather_description;
    //   ===============================================================================================
    //   Event listeners
    units__button.addEventListener("click", () => {
      if (toggle_units) {
        units__button.textContent = "Change units to °C";
        newTemperature.textContent = `${temp}°F`;
        toggle_units = false;
      } else {
        newTemperature.textContent = `${celsius}°C`;
        units__button.textContent = "Change units to °F";
        toggle_units = true;
      }
    });
  }
};
export { renderWeather };
