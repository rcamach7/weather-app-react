import React from "react";
import SearchEngine from "./searchEngine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodaysForecast extends React.Component {
  render() {
    return (
      <div className="TodaysForecast">
        <div className="websiteTitle">
          <h1>Weather Forecast</h1>
        </div>
        <div className="mainForecastContainer">
          <MainForecast
            cityName={this.props.cityName}
            weatherInfo={this.props.weatherInfo}
            currentTemp={this.props.temp}
            iconKey={this.props.iconKey}
          />

          <ExtendedInfo
            feels_like={this.props.feels_like}
            temp_max={this.props.temp_max}
            temp_min={this.props.temp_min}
            humidity={this.props.humidity}
          />
        </div>
        <SearchEngine handleNewSearch={this.props.handleNewSearch} />
      </div>
    );
  }
}

function MainForecast(props) {
  const renderIcon = (key) => {
    if (key === "Rain") {
      return <FontAwesomeIcon icon="cloud-showers-heavy" size="5x" />;
    } else if (key === "Clouds") {
      return <FontAwesomeIcon icon="cloud" size="5x" />;
    } else if (key === "Snow") {
      return <FontAwesomeIcon icon="snowflake" size="5x" />;
    } else {
      return <FontAwesomeIcon icon="sun" size="5x" />;
    }
  };

  return (
    <div className="MainForecast">
      <h2>
        {props.weatherInfo
          .toLowerCase()
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}
      </h2>
      <h3>{props.cityName}</h3>
      <p className="mainKey">
        Current Temperature
        <br />
        {props.currentTemp}°F
      </p>
      <div className="mainForecast-icon">{renderIcon(props.iconKey)}</div>
    </div>
  );
}

function ExtendedInfo(props) {
  return (
    <div className="ExtendedInfo">
      <p>
        Feels Like <br />
        {props.feels_like}°F
      </p>
      <p>
        Max-Temp <br />
        {props.temp_max}°F
      </p>
      <p>
        Min-Temp <br />
        {props.temp_min}°F
      </p>
      <p>
        Humidity <br />
        {props.humidity}% <FontAwesomeIcon icon="tint" size="1x" />
      </p>
    </div>
  );
}

export default TodaysForecast;
