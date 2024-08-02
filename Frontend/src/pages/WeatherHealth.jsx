import React, { useEffect, useState } from "react";
import WeatherAdvice from "./weatherAdvice";
import "./weather.css";

import weatherImage from "../assets/weather.jpg";

export default function WeatherHealth() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      const fetchWeatherData = async () => {
        try {
          const apiKey = import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY;

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
          );
          if (!response.ok) {
            throw new Error("Network not ok");
          }
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchWeatherData();
    }
  }, [location]);

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }

  return (
    <>
      <img
        className="main_image"
        style={{ height: "100vh", width: "100vw", paddingTop: "0" }}
        src={weatherImage}
      />
      {weather ? (
        <>
          <WeatherAdvice weatherdata={weather} />
        </>
      ) : (
        <>
          <div>please Allow Location</div>
        </>
      )}

      {/* <Footer/> Footer Goes here */}
    </>
  );
}
