import React, { useEffect, useState } from "react";
import "./pollution.css";

import pol1 from "../assets/pol1.jpg";
import pol2 from "../assets/pol2.jpg";
import pol3 from "../assets/pol3.jpg";
import pol4 from "../assets/pol4.jpg";
import pol5 from "../assets/pol5.jpg";
import guage from "../assets/gauge.png";
import arrow from "../assets/Arrow1.png";

export default function Pollution() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [aqi, setAqi] = useState(null);
  const [img, setImg] = useState(null);
  const [arrowClass, setArrowClass] = useState("");
  const [advice, setAdvice] = useState("");

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
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
          );
          if (!response.ok) {
            throw new Error("Network not ok");
          }
          const data = await response.json();
          setAqi(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchWeatherData();
    }
  }, [location]);

  useEffect(() => {
    if (aqi) {
      const AQI = aqi.list[0].main.aqi;
      let image = "";
      let animationClass = "";
      let adviceMessage = "";

      switch (AQI) {
        case 1:
          image = pol1;
          animationClass = "aqi-1";
          adviceMessage = "Air quality is good. Enjoy your day!";
          break;
        case 2:
          image = pol2;
          animationClass = "aqi-2";
          adviceMessage =
            "Air quality is fair. You can go outside but consider limiting prolonged exertion.";
          break;
        case 3:
          image = pol3;
          animationClass = "aqi-3";
          adviceMessage =
            "Air quality is unhealthy for sensitive groups. Limit outdoor activities if you have respiratory issues.";
          break;
        case 4:
          image = pol4;
          animationClass = "aqi-4";
          adviceMessage =
            "Air quality is unhealthy. Wear a face mask and avoid outdoor activities.";
          break;
        case 5:
          image = pol5;
          animationClass = "aqi-5";
          adviceMessage =
            "Air quality is very unhealthy. Avoid all outdoor activities and stay indoors.";
          break;
        default:
          image = "";
          animationClass = "";
          adviceMessage = "No advice available.";
      }

      setImg(image);
      setArrowClass(animationClass);
      setAdvice(adviceMessage);
    }
  }, [aqi]);

  return (
    <>
      {aqi && (
        <div>
          <img className="bg_image" src={img} alt="Pollution Background" />
          <div className="centerer">
            <img className="gauge" src={guage} alt="Gauge" />
          </div>
          <div>
            <img className={`arrow ${arrowClass}`} src={arrow} alt="Arrow" />
          </div>
          <br />
          <div className="advice-pollution">
            <h2>The AQI index in Your City is</h2>
            <h1>{aqi.list[0].main.aqi}</h1>
            <p>{advice}</p>
          </div>
        </div>
      )}
    </>
  );
}
