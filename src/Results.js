import logo from "./WeatherAppLogo.jpg";

function Results(props) {
  return (
    <>
      <div className="card container" style={{ width: 18 + "rem" }}>
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.weatherData.name}</h5>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Weather:</b> {props.weatherData.weather[0].main}
            </li>
            <li className="list-group-item">
              <b>Description:</b> {props.weatherData.weather[0].description}
            </li>
            <li className="list-group-item">
              <b>Temperature:</b>{" "}
              {(props.weatherData.main.temp - 272.15).toFixed(2)}° C
            </li>
            <li className="list-group-item">
              <b>Humidity:</b> {props.weatherData.main.humidity}%
            </li>
            <li className="list-group-item">
              <b>Pressure:</b> {props.weatherData.main.pressure}hPa
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Results;
