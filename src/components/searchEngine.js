import React from "react";

class SearchEngine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: "",
		};
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
	}

	handleSearchChange(e) {
		this.setState({
			searchValue: e.target.value,
		});
	}

	isFormValid() {
		// Form Validation
		if (this.state.searchValue === "") {
			alert("Please enter a valid zip-code - EMPTY");
			return false;
		} else if (
			this.state.searchValue.length > 5 ||
			this.state.searchValue.length < 5
		) {
			alert("Please enter a valid zip-code - LENGTH");
			return false;
		} else if (this.state.searchValue.match(/[^$,.\d]/)) {
			alert("Please enter a valid zip-code - LETTERS");
			return false;
		}

		return true;
	}

	handleSubmitSearch(e) {
		if (!this.isFormValid()) {
			return;
		}

		this.props.handleNewSearch(this.state.searchValue);
		// Clear Form and reset state.
		const form = document.getElementById("searchWeather");
		form.reset();
		this.setState({
			searchValue: "",
		});
	}

	render() {
		return (
			<div className="searchEngine">
				<form action="#" id="searchWeather">
					<label htmlFor="search">Search by Zip Code </label>
					<input
						type="text"
						id="search"
						onChange={this.handleSearchChange}
					></input>

					<input
						type="submit"
						value="Submit"
						onClick={this.handleSubmitSearch}
					></input>
				</form>
			</div>
		);
	}
}

export default SearchEngine;