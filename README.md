# 🌤️ React Weather App
A responsive weather web app built with Vite and React. Uses Open Meteo for weather data and OpenCage for geocoding.

### 🔗 [Live Demo - Visit Teatime](https://react-weather-app-sushi.vercel.app)

---

## 🚀 Getting Started

To run the project locally, follow these steps:

1.  Clone the repository and install dependencies:
    ```bash
    npm install
    ```
2.  Set up your API keys (see **APIs** section).
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

## 🛠️ APIs

Weather data is from **OpenMeteo** (https://open-meteo.com/).

I used **OpenCage Geocoding** (https://opencagedata.com/) to convert place names into coordinates.

* **Note:** You will need to obtain a key from **OpenCage** and set it up as an environment variable in a `.env` file (e.g., `VITE_OPENCAGE_API_KEY`).

---

## 🖼️ Application Screenshots

<div align="center">
    <h3>Main Desktop View</h3>
    <img src="screenshots/1.png" alt="Main layout of the weather application on a desktop screen." width="700"/>
    <br/>
    <h3>Mobile/Forecast View</h3>
    <img src="screenshots/2.png" alt="Weather forecast or mobile view of the application." width="400"/>
</div>

---

## 📄 License

This project is open-source and available under the **[MIT License](LICENSE)**.
