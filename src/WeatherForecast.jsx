import React, { useState } from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ day, img, imgAlt, conditions, time, temperatureC }) => {
  // State to handle temperature unit: Celsius or Fahrenheit
  const [isCelsius, setIsCelsius] = useState(true);

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  // Handle the temperature display based on the selected unit
  const temperature = isCelsius
    ? `${temperatureC}°C`
    : `${Math.round(celsiusToFahrenheit(temperatureC))}°F`;

  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
      <p><span>temperature: </span>{temperature}</p>
      <button onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
    </div>
  );
};

export default WeatherForecast;


  
  

