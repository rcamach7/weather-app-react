const DefaultData = (() => {
	const randomZipCodes = [
		91387,
		60193,
		"01844",
		"06340",
		18052,
		20175,
		19355,
		95050,
		46123,
		"01930",
		"06705",
		44720,
		38632,
		11365,
		42101,
		22701,
		10573,
		"07302",
		54729,
		45103,
		"08105",
		28078,
		"06514",
		"06109",
		44221,
		14850,
		"08759",
		17013,
		60459,
		32127,
		11791,
	];

	const returnRandomZipCode = () => {
		const limit = randomZipCodes.length;
		let key = Math.floor(Math.random() * limit);

		return randomZipCodes[key];
	};

	return {
		returnRandomZipCode,
	};
})();

export { DefaultData };
