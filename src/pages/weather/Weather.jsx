import "./weather.css";
import { CircularProgress, Slide, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export function Weather() {
  const WEATHER_KEY = "a08652be61e92f0f0f9710bfb4f9b223";

  const [cityName, setCityName] = useState("Logroño");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_KEY}&units=metric`
      )
      .then((res) => {
        if (res.status === 200) {
          setError(false);
          return res.data;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputText("");
    }
  };

  return (
    <div className="weather-container">
      {!loading ? (
        <>
          <TextField
            variant="filled"
            label="Buscar por localización"
            className="weather__input"
            InputLabelProps={{ style: { color: "#E9E9E9" } }}
            error={error}
            value={inputText}
            InputProps={{ style: { color: "#E9E9E9" } }}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
          />
          <h2 className="weather__city">{data.name}</h2>
          <div className="weather__data">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="icono descriptivo de clima"
            />
            <h3 className="weather__data-description">
              {data.weather[0].main}
            </h3>
          </div>

          <h2 className="weather__temp">{data.main.temp.toFixed()} °C</h2>

          <Slide direction="right" timeout={800} in={!loading}>
            <div className="weather__info">
              <div className="weather__info-item">
                <p>Humidity</p>
                <h3>{data.main.humidity.toFixed()}%</h3>
              </div>

              <div className="weather__info-item">
                <p>Wind</p>
                <h3>{data.wind.speed.toFixed()} km/h</h3>
              </div>

              <div className="weather__info-item">
                <p>Feels like</p>
                <h3>{data.main.feels_like.toFixed()} ºC</h3>
              </div>
            </div>
          </Slide>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
