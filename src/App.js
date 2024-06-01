import logo from "./WeatherAppLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { TbError404Off } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";
import "./App.css";

import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  async function weatherSearchByInput() {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=877fe367e2cc86f1d48262dd0eaa94fd`
      );
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
      setWeatherData(error.response.data);
    }
  }
  console.log(weatherData);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} style={{ width: 40 }} alt="logo" />
          <a className="navbar-brand mx-auto" href="/">
            WeatherApp
          </a>
        </div>
      </nav>

      <div className="container d-flex mt-5">
        <input
          className="form-control mx-3"
          type="text"
          placeholder="Enter Your City..."
          aria-label="default input example"
          id="inputValue"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          className="btn btn-primary d-flex align-items-center"
          onClick={weatherSearchByInput}
        >
          <IoSearchOutline className="me-2" />
          Search
        </button>
      </div>

      {weatherData &&
        (weatherData.cod === "404" ? (
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mt-5">
              <TbFaceIdError
                className="text-danger"
                style={{ fontSize: "5rem" }}
              />
              <h1 className="text-danger ml-5">No City Found!</h1>
            </div>

            <TbError404Off
              className="text-danger mt-5"
              style={{ fontSize: "5rem" }}
            />
          </div>
        ) : (
          <Results weatherData={weatherData} />
        ))}
    </>
  );
}

export default App;
