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
	return (
		<div className="MainForecast">
			<h1>
				{props.weatherInfo
					.toLowerCase()
					.split(" ")
					.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
					.join(" ")}
			</h1>
			<h2>{props.cityName}</h2>
			<h2>Current Temperature</h2>
			<h2>
				{props.currentTemp}°F <br />
				<FontAwesomeIcon icon="cloud" size="5x" className="icon" />
			</h2>
		</div>
	);
}

function ExtendedInfo(props) {
	return (
		<div className="ExtendedInfo">
			<h3>
				Feels Like <br />
				{props.feels_like}°F
			</h3>
			<h3>
				Max-Temp <br />
				{props.temp_max}°F
			</h3>
			<h3>
				Min-Temp <br />
				{props.temp_min}°F
			</h3>
			<h3>
				Humidity <br />
				{props.humidity}% <FontAwesomeIcon icon="tint" size="1x" />
			</h3>
		</div>
	);
}

export default TodaysForecast;
