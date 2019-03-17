import React from 'react';
const SearchForm = (props) => {
	return (
		<div>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">GitHub search!</h1>
					<p>Search user repositories and organisations in Github.</p>

					<form onSubmit={(event) => props.handleUserFormSubmit(event)} className="form-inline">
						<label>
							<input
								name="username"
								type="text"
								placeholder="GitHub username"
								required
								value={props.formData.username}
								onChange={props.handleFormChange}
								className="form-control form-control-lg"
							/>
						</label>
						<div>
							<input type="submit" value="Submit" className="btn btn-primary btn-lg m-2" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SearchForm;
