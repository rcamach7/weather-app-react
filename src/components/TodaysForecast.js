import React from "react";

class TodaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInitialRender: true,
			cityName: "",
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
				mainProperties: this.props.cityDayForecast.main,
			});
		}
	}

	temperatureConverter(valNum) {
		valNum = parseFloat(valNum);
		return (valNum - 273.15) * 1.8 + 32;
	}

	render() {
		return (
			<div className="TodaysForecast">
				{/* Testing Functions */}
				{/* {console.log(this.props.cityDayForecast.weatherInfo.description)} */}
				{console.log(this.state)}
				<CityForecast
					cityName={this.state.cityName}
					weatherInfo={this.state.weatherInfo}
					mainProperties={this.state.mainProperties}
				/>
			</div>
		);
	}
}

function CityForecast(props) {
	return (
		<div className="CityForecast">
			<h1>{props.cityName}</h1>
			<h2>Weather info: {props.weatherInfo}</h2>
			{
				// Will pull and post all main properties as h2 tags
				Object.keys(props.mainProperties).map((key) => {
					return <h3 key={key}>{`${key} : ${props.mainProperties[key]}`}</h3>;
				})
			}
		</div>
	);
}

export default TodaysForecast;
