import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/searchForm.jsx';
import RepositoriesList from './components/repositoriesList.jsx';

let baseURL = 'https://api.github.com/users/';

class App extends Component {
	state = {
		username: 'No username',
		info: '',
		formData: {
			username: ''
		},
		repositories: null,
		orgs: null
	};

	handleUserFormSubmit = (event) => {
		event.preventDefault();
		axios
			.get(baseURL + this.state.formData.username)
			.then((response) =>
				this.setState({
					username: response.data.login,
					info: response.data
				})
			)
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(baseURL + this.state.formData.username + '/repos')
			.then((response) =>
				this.setState({
					repositories: response.data
				})
			)
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(baseURL + this.state.formData.username + '/orgs')
			.then((response) =>
				this.setState({
					orgs: response.data
				})
			)
			.catch((err) => {
				console.log(err);
			});
	};

	handleFormChange = (event) => {
		const obj = this.state.formData;
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	};

	render() {
		return (
			<main role="main">
				<SearchForm
					formData={this.state.formData}
					handleUserFormSubmit={this.handleUserFormSubmit}
					handleFormChange={this.handleFormChange}
				/>

				<div className="container">
					<RepositoriesList repositories={this.state.repositories} info={this.state.info} />
				</div>
			</main>
		);
	}
}
export default App;
