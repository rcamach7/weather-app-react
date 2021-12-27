import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const FiveDayForecasts = (props) => {
// 	// these are generated weather cards based on the above data
// 	const [dayCards, setDayCards] = useState([]);

// 	useEffect(() => {
// 		props.fiveDayForecasts.map((day) => {
// 			let newDayCard = (
// <DayCard
// 	key={day.dt_txt}
// 	date={day.dt_txt.substring(0, 10)}
// 	temp={day.main.temp}
// />
// 			);
// 			let currentCards = dayCards;
// 			currentCards.push(newDayCard);
// 			setDayCards(currentCards);
// 		});
// 	}, [props.fiveDayForecasts, dayCards]);

// 	return (
// 		<div className="FiveDayForecasts">
// 			<button onClick={() => console.log(dayCards)}>
// 				Print Weather cards states
// 			</button>
// 			{dayCards}
// 		</div>
// 	);
// };

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
