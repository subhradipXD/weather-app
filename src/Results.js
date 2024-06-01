import "./App.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiTempHigh } from "react-icons/ci";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { BsCloudHaze2 } from "react-icons/bs"; //haze
import { BsWind } from "react-icons/bs";
function Results(props) {
  return (
    <>
      <h3 className="text-center text-primary mt-5">
        {props.weatherData.name}, {props.weatherData.sys.country}
      </h3>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <TiWeatherPartlySunny className="me-2 fs-4" />
                <b>Weather:</b> {props.weatherData.weather[0].main}
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <BsCloudHaze2 className="me-2 fs-4" />
                <b>Description:</b> {props.weatherData.weather[0].description}
              </div>
            </div>
          </div> */}
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <CiTempHigh className="me-2 fs-4" />
                <b>Temperature:</b>{" "}
                {(props.weatherData.main.temp - 272.15).toFixed(2)}° C
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <TbTemperature className="me-2 fs-4" />
                <b>Feels Like:</b>{" "}
                {(props.weatherData.main.feels_like - 272.15).toFixed(2)}° C
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <WiHumidity className="me-2 fs-5" />
                <b>Humidity:</b> {props.weatherData.main.humidity}%
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <BsWind className="me-2 fs-5" />
                <b>Pressure:</b> {props.weatherData.main.pressure}hPa
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <FaTemperatureArrowUp className="me-2 fs-4" />
                <b>Max Temperature:</b>{" "}
                {(props.weatherData.main.temp_max - 272.15).toFixed(2)}° C
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-hover">
              <div className="card-body">
                <FaTemperatureArrowDown className="me-2 fs-4" />
                <b>Min Temperature:</b>{" "}
                {(props.weatherData.main.temp_min - 272.15).toFixed(2)}° C
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
