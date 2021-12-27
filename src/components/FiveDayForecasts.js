import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FiveDayForecasts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiResponse: props.fiveDayForecasts,
		};
	}

	render() {
		return (
			<div className="FiveDayForecasts">
				{this.props.fiveDayForecasts.map((day) => {
					return (
						<DayCard
							key={day.dt_txt}
							date={day.dt_txt.substring(0, 10)}
							temp={day.main.temp}
							forecast={day.weather[0].description}
							iconKey={day.weather[0].main}
						/>
					);
				})}
			</div>
		);
	}
}

const renderIcon = (key) => {
	if (key === "rain") {
		return <FontAwesomeIcon icon="cloud-showers-heavy" size="2x" />;
	} else if (key === "clouds") {
		return <FontAwesomeIcon icon="cloud" size="2x" />;
	} else if (key === "snow") {
		return <FontAwesomeIcon icon="snowflake" size="2x" />;
	} else {
		return <FontAwesomeIcon icon="sun" size="2x" />;
	}
};

const DayCard = (props) => {
	const returnDayOfWeek = (date) => {
		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const broken_date = date.split("-");
		const date_gen = new Date(
			broken_date[0],
			broken_date[1] - 1,
			broken_date[2]
		).getDay();

		// Return appropriate day
		return daysOfWeek[date_gen];
	};

	return (
		<div className="dayCard">
			<p className="dayProperty">{returnDayOfWeek(props.date)}</p>
			<p className="dayProperty">{props.temp}°F</p>
			<p className="dayProperty">{props.forecast}</p>
			<p className="dayProperty" id="iconHolder">
				{renderIcon(props.iconKey.toLowerCase())}
			</p>
		</div>
	);
};

export default FiveDayForecasts;
