import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInitialRender: true,
			cityName: "",
			// Will have to get the other property with a single word as well
			// so we can determine which main icon to use. The other property is one word we can
			// easily match with a icon as apposed to what we are saving right now.
			weatherInfo: "",
			mainProperties: {
				feels_like: "",
				humidity: "",
				pressure: "",
				temp: "",
				temp_max: "",
				temp_min: "",
			},
		};
	}

	// This will run once the prop changes, meaning we have received our API response and are ready to process it.
	componentDidUpdate() {
		if (this.state.isInitialRender) {
			this.setState({
				isInitialRender: false,
				cityName: this.props.cityDayForecast.name,
				weatherInfo: this.props.cityDayForecast.weather[0].description,
				mainProperties: this.removeKey(this.props.cityDayForecast.main),
			});
		}
	}

	removeKey(object) {
		// This will remove the key defined underneath from the object received
		const { pressure, ...newData } = object;
		return newData;
	}

	render() {
		return (
			<div className="TodaysForecast">
				<MainForecast
					cityName={this.state.cityName}
					weatherInfo={this.state.weatherInfo}
					currentTemp={this.state.mainProperties.temp}
				/>

				<ExtendedInfo
					feels_like={this.state.mainProperties.feels_like}
					temp_max={this.state.mainProperties.temp_max}
					temp_min={this.state.mainProperties.temp_min}
					humidity={this.state.mainProperties.humidity}
				/>
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
