import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md text-white w-80 mx-auto mt-20 p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-lg">{data.city}</p>
          <p className="text-sm">{data.weather[0].description}</p>
        </div>
        
      </div>
      <div className="mt-6">
        <p className="font-medium text-5xl">{Math.round(data.main.temp)}°C</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <span className="font-medium">Feels like</span>
            <span className="font-semibold">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Wind</span>
            <span className="font-semibold">{data.wind.speed} m/s</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Humidiy</span>
            <span className="font-semibold">{data.main.humidity}%</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Pressure</span>
            <span className="font-semibold">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
