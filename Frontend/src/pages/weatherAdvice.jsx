import React, { useEffect, useState } from "react";
import "./weather.css";

export default function weatherAdvice({ weatherdata }) {
  const [advice, setAdvice] = useState({
    temperature: "",
    humidity: "",
    wind: "",
    visibility: "",
    cloud: "",
    pressure: "",
  });

  const [col, setCol] = useState({
    tempCol: "",
  });

  useEffect(() => {
    if (weatherdata) {
      const temp = weatherdata.main.temp;
      const humid = weatherdata.main.humidity;
      const wind = weatherdata.wind.speed;
      const visibility = weatherdata.visibility;
      const cloud = weatherdata.clouds.all;
      const pressure = weatherdata.main.pressure;

      let tempAdvice = "";
      let humidAdvic = "";
      let windAdvice = "";
      let visibilityAdvice = "";
      let cloudAdvice = "";
      let pressureAdvice = "";

      let tempCol = "";

      const celcTemp = temp - 273.15;

      // Temperature Advice
      if (celcTemp > 50) {
        tempCol = "red";
        tempAdvice +=
          "Extreme heat alert! Avoid going outside. Stay in cool, air-conditioned areas. Drink plenty of water and avoid strenuous activities.";
      } else if (celcTemp > 45) {
        tempCol = " red";
        tempAdvice +=
          "Very hot weather! Minimize outdoor activities. Stay hydrated, wear light, breathable clothing, and use sunscreen.";
      } else if (celcTemp > 40) {
        tempCol = "orange";
        tempAdvice +=
          "Hot weather! Reduce physical activities outdoors, stay hydrated, and take frequent breaks in shaded or cool areas.";
      } else if (celcTemp > 35) {
        tempCol = " orange";
        tempAdvice +=
          "Warm weather! Drink plenty of fluids, wear light clothing, and take breaks in cool areas.";
      } else if (celcTemp > 30) {
        tempCol = "green";
        tempAdvice +=
          "Moderate weather! Normal precautions; dress comfortably and stay hydrated.";
      } else if (celcTemp > 20) {
        tempCol = "green";
        tempAdvice +=
          "Pleasant weather! Dress comfortably and enjoy outdoor activities.";
      } else if (celcTemp > 10) {
        tempCol = "aqua";
        tempAdvice += "Cool weather! Dress in layers and stay hydrated.";
      } else if (celcTemp > 0) {
        tempCol = "aqua";
        tempAdvice +=
          "Cold weather! Wear warm clothing and limit exposure to the cold.";
      } else if (celcTemp > -10) {
        tempCol = "blue";
        tempAdvice +=
          "Very cold weather! Dress in layers with insulating clothing, cover exposed skin, and stay indoors as much as possible.";
      } else {
        tempCol = "blue";
        tempAdvice +=
          "Extreme cold alert! Dress in multiple layers with windproof and waterproof clothing. Limit outdoor activities to prevent frostbite and hypothermia.";
      }

      // Humidity Advice
      if (humid > 80) {
        humidAdvic +=
          "High humidity! Take frequent breaks in cool places, wear breathable clothing, and use dehumidifiers indoors.";
      } else if (humid > 60) {
        humidAdvic +=
          "Moderate humidity! Stay hydrated and ensure proper ventilation indoors.";
      } else if (humid < 30) {
        humidAdvic +=
          "Low humidity! Use a humidifier indoors, drink plenty of water, and apply moisturizers.";
      } else {
        humidAdvic += "Normal Humidity,No Particular Precautions Needed";
      }

      // Wind Advice
      if (wind > 14) {
        windAdvice +=
          "Strong winds! Secure loose outdoor objects, avoid outdoor activities, and be cautious when driving.";
      } else if (wind > 8) {
        windAdvice +=
          "Moderate winds! Be cautious of flying debris and secure loose items.";
      } else {
        windAdvice += "Normal Wind,No particular Precautions Needed";
      }

      // Visibility Advice
      if (visibility < 1000) {
        visibilityAdvice +=
          "Low visibility! Avoid driving if possible. Use fog lights and drive slowly. Stay indoors if you have respiratory conditions.";
      } else if (visibility < 5000) {
        visibilityAdvice +=
          "Reduced visibility! Exercise caution when driving and limit outdoor activities if visibility is significantly reduced.";
      } else {
        visibilityAdvice += "Normal Visibility ,No precautions needed ";
      }

      // Cloud Cover Advice
      if (cloud > 80) {
        cloudAdvice +=
          "Heavy cloud cover! Expect reduced sunlight and cooler temperatures. Carry an umbrella or raincoat if there is a chance of rain.";
      } else if (cloud > 50) {
        cloudAdvice +=
          "Moderate cloud cover! Be aware of changing weather conditions and carry a light jacket or umbrella if necessary.";
      }

      // Pressure Advice
      if (pressure < 1000) {
        pressureAdvice +=
          "Low pressure! People with migraines or joint issues might experience discomfort. Stay hydrated and be prepared for potential weather changes.";
      } else if (pressure > 1020) {
        pressureAdvice +=
          "High pressure system detected! You can expect clear skies and stable weather conditions. It's a good time for outdoor activities. However, prolonged high pressure can sometimes lead to temperature extremes, so be prepared for sudden changes in temperature. People with respiratory conditions might experience discomfort. Stay hydrated and check weather updates regularly.";
      } else {
        pressureAdvice +=
          "Normal Pressure Expected ,Not Much Change in Temperature Expected";
      }
      setAdvice({
        temperature: tempAdvice,
        humidity: humidAdvic,
        wind: windAdvice,
        visibility: visibilityAdvice,
        cloud: cloudAdvice,
        pressure: pressureAdvice,
      });
      setCol({
        tempCol: tempCol,
      });
    }
  }, [weatherdata]);

  return (
    <div>
      <div className="weather_heading">
        <h1>Weather And Health</h1>
        <p>
          Weather significantly impacts health by influencing our body's ability
          to regulate temperature, affecting humidity levels, and impacting air
          quality. Extreme heat or cold can lead to heatstroke, hypothermia, or
          dehydration. High humidity can worsen respiratory issues, while low
          humidity can dry out the skin and airways. Wind and poor visibility
          also pose risks, making it essential to adapt to weather conditions to
          maintain health and safety.
        </p>
        <div>
          <h5>
            {" "}
            Current Temperature in {weatherdata.name} is{" "}
            {(weatherdata.main.temp - 273.15).toFixed(2)}°C and it feels like{" "}
            {(weatherdata.main.feels_like - 273.15).toFixed(2)}°C <br /> Follow
            These Precautions for a healthy and Productive day
          </h5>
        </div>
      </div>
      <div className="weather_flex">
        <div className="advice">
          <h2>Temperature Advice</h2>
          <p>{advice.temperature}</p>
        </div>
        <div className="advice">
          {" "}
          <h2>Humidity Advice</h2>
          <p>{advice.humidity}</p>
        </div>
      </div>
      <div className="weather_flex">
        {" "}
        <div className="advice">
          <h2>Wind Advice</h2>
          <p>{advice.wind}</p>
        </div>
        <div className="advice">
          {" "}
          <h2>Visibility Advice</h2>
          <p>{advice.visibility}</p>
        </div>{" "}
      </div>
      <div className="weather_flex">
        <div className="advice">
          {" "}
          <h2>Cloud Cover Advice</h2>
          <p>{advice.cloud}</p>
        </div>
        <div className="advice">
          <h2>Pressure Advice</h2>
          <p>{advice.pressure}</p>
        </div>
      </div>
    </div>
  );
}
