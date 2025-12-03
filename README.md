# 🌤️ React Weather App
A responsive weather web app built with Vite and React. Uses Open Meteo for weather data and OpenCage for geocoding.

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

## 📄 License

This project is open-source and available under the **[MIT License](LICENSE)**.
