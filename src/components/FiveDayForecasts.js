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
						/>
					);
				})}
			</div>
		);
	}
}

const DayCard = (props) => {
	return (
		<div className="dayCard">
			<p className="dayProperty">{props.date}</p>
			<p className="dayProperty">{props.temp}°F</p>
			<p className="dayProperty">{props.forecast}</p>
			<p className="dayProperty" id="iconHolder">
				<FontAwesomeIcon icon="cloud" size="5x" className="icon" />
			</p>
		</div>
	);
};

export default FiveDayForecasts;
