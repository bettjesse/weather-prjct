
import "./App.css"
import { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
// import Forecast from "./components/Forecast";
import { WEATHER_API_URL,WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = async (searchData) => {
    try {
      const [lat, lon] = searchData.value.split(" ");
      const currentWeatherResponse = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      // const forecastResponse = await fetch(
      //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      // );
  
      const currentWeatherData = await currentWeatherResponse.json();
      // const forcastData = await forecastResponse.json();
  
      setCurrentWeather({ city: searchData.label, ...currentWeatherData });
      // setForecast({ city: searchData.label, ...forcastData });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;