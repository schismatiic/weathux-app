const renderInfo = (container, searchbutton) => {
  //   ===============================================================================================
  //   Variables
  let toggle = true;
  //   ===============================================================================================
  //   Create element
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
  //   ===============================================================================================
  //   Append child
  info__box.appendChild(info__title);
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
};
export { renderInfo };
