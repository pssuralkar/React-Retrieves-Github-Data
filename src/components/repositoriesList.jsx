import React from 'react';
import ProfileDetails from './profileDetails.jsx';

const subHeaderBg = {
	backgroundColor: '#e9ecef'
};

const RepositoriesList = (props) => {
	if (props.repositories) {
		return (
			<div>
				<ProfileDetails info={props.info} />

				<div className="d-flex align-items-center p-3 my-3" style={subHeaderBg}>
					<div className="lh-100">
						<h2 className="mb-0 lh-100">Repositories:</h2>
					</div>
				</div>

				<div className="row">
					{props.repositories.map((repitem, index) => (
						<div className="col-md-4" key={index}>
							<div className="card mb-4 shadow-sm">
								<div className="card-header">
									<h4 className="my-0 font-weight-normal">{repitem.name}</h4>
								</div>
								<div className="card-body">
									<p className="card-text">{repitem.description}</p>
									<a href={repitem.html_url} className="btn btn-md btn-block btn-primary">
										{'Link'}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default RepositoriesList;
