import React from "react";
import "./App.css";
import TodaysForecast from "./TodaysForecast";
import SearchEngine from "./searchEngine";
import FiveDayForecasts from "./FiveDayForecasts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faCheckSquare,
	faCloud,
	faTint,
} from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: "loading...",
			// Will have to get the other property with a single word as well
			// so we can determine which main icon to use. The other property is one word we can
			// easily match with a icon as apposed to what we are saving right now.
			weatherInfo: "loading...",
			mainProperties: {
				feels_like: "loading...",
				humidity: "loading...",
				pressure: "loading...",
				temp: "loading...",
				temp_max: "loading...",
				temp_min: "loading...",
			},
			fiveDayForecasts: [],
		};
		this.handleNewSearch = this.handleNewSearch.bind(this);
	}

	handleNewSearch(zipCode) {
		let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=cfe4442a714e271f99bffe0fa0ebbae1&units=imperial`;
		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					cityName: result.name,
					weatherInfo: result.weather[0].description,
					mainProperties: result.main,
				});
			});
	}

	// Default zip-code we will use on first launch.
	componentDidMount() {
		let url =
			"http://api.openweathermap.org/data/2.5/weather?zip=90201,us&appid=cfe4442a714e271f99bffe0fa0ebbae1&units=imperial";
		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					cityName: result.name,
					weatherInfo: result.weather[0].description,
					mainProperties: result.main,
				});
			});
		this.fetchWeekForecasts();
	}

	fetchWeekForecasts() {
		let url = `http://api.openweathermap.org/data/2.5/forecast?zip=90201,&appid=cfe4442a714e271f99bffe0fa0ebbae1&units=imperial`;
		// "http://api.openweathermap.org/data/2.5/weather?zip=90201,us&appid=cfe4442a714e271f99bffe0fa0ebbae1&units=imperial"
		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				let fullResponse = result.list;
				let dayContainer = [];

				for (let i = 0; i < fullResponse.length; i++) {
					if (fullResponse[i].dt_txt.substring(11) === "21:00:00") {
						dayContainer.push(fullResponse[i]);
					}
				}
				this.setState({
					fiveDayForecasts: dayContainer,
				});
			});
	}

	render() {
		const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
			this.state.mainProperties;
		return (
			<div className="App">
				<TodaysForecast
					cityName={this.state.cityName}
					weatherInfo={this.state.weatherInfo}
					feels_like={feels_like}
					humidity={humidity}
					pressure={pressure}
					temp={temp}
					temp_max={temp_max}
					temp_min={temp_min}
				/>
				<SearchEngine handleNewSearch={this.handleNewSearch} />
				<FiveDayForecasts fiveDayForecasts={this.state.fiveDayForecasts} />
			</div>
		);
	}
}

library.add(fab, faCheckSquare, faCloud, faTint);
export default App;
