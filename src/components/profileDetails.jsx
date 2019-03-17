import React from 'react';

const imgStye = {
	width: '250px',
	height: '250px',
	padding: '10px'
};

const subHeaderBg = {
	backgroundColor: '#e9ecef'
};

const ProfileDetails = (props) => {
	return (
		<div>
			<div className="d-flex align-items-center p-3" style={subHeaderBg}>
				<div className="lh-100">
					<h2 className="mb-0 lh-100">Profile Details:</h2>
				</div>
			</div>

			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-3">
						{props.info.avatar_url ? (
							<img src={props.info.avatar_url} alt="Profile" style={imgStye} />
						) : null}
					</div>
					<div className="col-md-9">
						<div className="card-body">
							<h4 className="card-title">
								{props.info.name ? (
									<div>
										<p>
											<b>Name: </b> {props.info.name}
										</p>
									</div>
								) : null}
							</h4>
							<p className="card-text">
								<b>Location: </b>
								{props.info.location}
							</p>
							<p className="card-text">
								<strong>Description:</strong> {props.info.bio}
							</p>
							<p className="card-text">
								<b>Orgnization: </b>
								{props.info.company}
							</p>
							<p className="card-text">
								<strong>Blog:</strong> <a href={props.info.blog}>{props.info.blog}</a>{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileDetails;
