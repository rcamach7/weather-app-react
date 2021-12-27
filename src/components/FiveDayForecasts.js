import React, { useState, useEffect } from "react";

const FiveDayForecasts = (props) => {
	const [daysCollection, setDaysCollection] = useState([]);

	useEffect(() => {
		setDaysCollection(props.fiveDayForecasts);
	}, [props.fiveDayForecasts]);

	useEffect(() => {
		daysCollection.map((day) => {
			console.log(day);
		});
	}, [daysCollection]);

	const renderWeatherCard = () => {
		// Use same method here I used in the pokemon card generation.
	};

	return (
		<div>
			{/* Use same concept here as pokemon card, map through state array, and generate weathercards */}
			<h1>Hello World</h1>
		</div>
	);
};

export default FiveDayForecasts;
