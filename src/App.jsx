// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import WeatherContainer from "./containers/WeatherContainer/WeatherContainer";
import Socials from "./components/Socials/Socials";
import "./App.css";

function App() {
  return (
    <div className="app">
      <WeatherContainer />
      <Socials />
    </div>
  );
}

export default App;
