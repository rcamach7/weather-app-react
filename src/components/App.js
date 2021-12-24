import React from "react";
import "./App.css";
import TodaysForecast from "./TodaysForecast";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cityDayForecast: [],
		};
	}

	componentDidMount() {
		let url =
			"http://api.openweathermap.org/data/2.5/weather?zip=90201,us&appid=cfe4442a714e271f99bffe0fa0ebbae1&units=imperial";
		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					cityDayForecast: result,
				});
			});
	}

	render() {
		return (
			<div className="App">
				<TodaysForecast cityDayForecast={this.state.cityDayForecast} />
			</div>
		);
	}
}

export default App;
