import React, { useState } from "react";
import Navbar from "./Navbar";
import Results from "./Results";

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };
// function success(pos) {
//   const crd = pos.coords;
//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
//   // weatherSearchByGeoLocation(crd);
// }
// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
// navigator.geolocation.getCurrentPosition(success, error, options);

// function weatherSearchByGeoLocation(crd) {
//   fetch(
//     "https://api.openweathermap.org/data/3.0/onecall?lat=" +
//       crd.latitude.toFixed(2) +
//       "&lon=" +
//       crd.longitude.toFixed(2) +
//       "&appid=877fe367e2cc86f1d48262dd0eaa94fd"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// document.getElementById('bg').style.backgroundImage = {logo};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  function weatherSearchByInput() {
    const inputValue = document.getElementById("inputValue").value;
    console.log(inputValue);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue +
        "&appid=877fe367e2cc86f1d48262dd0eaa94fd"
    )
      .then((response) => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Oops! No result found...");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data object has a 'cod' property indicating an error
        if (data.cod && data.message) {
          // Handle specific error message returned by the API
          throw new Error(`${data.cod}: ${data.message}`);
        }
        // use setWeatherData to store the data in the state variable
        setWeatherData(data);
        // optionally, you can also log the data to the console
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch process
        console.error("Error fetching weather data:", error.message);
        // Display the error message on the screen
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.innerText = error.message;
      });
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="container">
          <div className="container d-flex">
            <input
              className="form-control mx-3"
              type="text"
              placeholder="Enter Your City..."
              aria-label="default input example"
              id="inputValue"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={weatherSearchByInput}
            >
              Search
            </button>
          </div>
          <br />
          <br />
          <b><div id="errorMessage" className="container mx-5"></div></b>
        </div>
      </div>
      <br />
      <br />
      {weatherData ? <Results weatherData={weatherData} /> : null}
    </>
  );
}

export default App;
