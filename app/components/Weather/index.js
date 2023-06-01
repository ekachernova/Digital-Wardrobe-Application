import styles from "../../styles.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { storeVariables } from "@/store/storeVariables";
import { useSnapshot } from "valtio";

export default function Weather() {
  const [weather, setWeather] = useState({});

  const actualWeather = useSnapshot(storeVariables);

  console.log(actualWeather);

  useEffect(() => {
    async function weatherFetch() {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=1f37f1e7fbfc4a2d9f8115546232605&q=Berlin&aqi=no"
      );

      const weather = await response.json();
      setWeather(weather);
      storeVariables.globalWeather = weather;
      console.log(weather);
    }
    weatherFetch();
  }, []);

  return (
    <div className={styles.weather}>
      <img
        src={
          weather?.current?.condition?.text?.includes(
            "rain" || "snow" || "Snow"
          ) === true
            ? "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            : "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80"
        }
      ></img>
      <div className={styles.weatherGreeting}>
        <h4>{`Hello! Today is ${weather?.current?.condition?.text} in ${weather?.location?.name}
          ${weather?.current?.temp_c} °C`}</h4>
      </div>
    </div>
  );
}
