import React from "react";
import "../index.css"

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-card">
    <div className="card-header">
      <div>
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
      </div>
    </div>
    <div className="card-content">
      <p className="temperature">{Math.round(data.main.temp)}°C</p>
      <div className="additional-info">
        <div className="info-item">
          <span className="info-label">Feels like</span>
          <span className="info-value"> {Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="info-item">
          <span className="info-label">Wind</span>
          <span className="info-value">{data.wind.speed} m/s</span>
        </div>
        <div className="info-item">
          <span className="info-label">Humidity</span>
          <span className="info-value">{data.main.humidity}%</span>
        </div>
        <div className="info-item">
          <span className="info-label">Pressure</span>
          <span className="info-value">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CurrentWeather;
