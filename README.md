# Weather App

A weather forecast web app built with **JavaScript** and bundled using **Webpack**, powered by the **Visual Crossing API**. Users can search for any location, view real-time weather data, and toggle between Celsius and Fahrenheit with dynamic UI updates.

---

## Features

- Search weather by location
- Fetch real-time data from an external API
- Toggle between °C and °F
- Dynamic UI changes based on weather conditions
- Modular JavaScript structure with Webpack
- Optional loading state for improved UX

---

## How It Works

- User submits a location through a form
- The app fetches data from the Visual Crossing API
- JSON data is processed into a simplified format
- The UI is dynamically updated with relevant weather info
- Styling and visuals adjust depending on the weather

---

## Key Concepts

- API Fetching (Promises / async–await)
- JSON Data Processing
- DOM Manipulation
- ES6 Modules
- Webpack Bundling

---

## Project Structure

```id="c0f2mn"
/project-root
│── /dist
│── /src
│   │── index.js
│   │── style.css
│   │── modules/
│── package.json
│── webpack.config.js
│── .gitignore
└── README.md
```

---

## Development Setup

1. Install dependencies:

```bash id="kq3m1z"
npm install
```

2. Run development server:

```bash id="m91zxa"
npx webpack serve
```

3. Open in browser:

```id="t8v4pw"
http://localhost:8080
```

---

## Build

To create a production build:

```bash id="l2q7sd"
npx webpack
```

---

## API Key Note

This project uses a public API key for learning purposes.
In production, API keys should be stored securely (e.g., environment variables) and never exposed to the client.

---

## Optional Enhancements

- Weather-based GIFs (Giphy API)
- Loading spinner during API requests
- Improved UI/animations
- Better error handling for invalid searches

---

## License

This project is open-source and available under the MIT License.
