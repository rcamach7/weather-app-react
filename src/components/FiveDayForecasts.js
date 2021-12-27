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
	return (
		<div className="dayCard">
			<p className="dayProperty">{props.date}</p>
			<p className="dayProperty">{props.temp}°F</p>
			<p className="dayProperty">{props.forecast}</p>
			<p className="dayProperty" id="iconHolder">
				{renderIcon(props.iconKey.toLowerCase())}
			</p>
		</div>
	);
};

export default FiveDayForecasts;
