import React from 'react';

export default class SocialLink extends React.Component {

	render() {
		return (
			<div className="card-name">
				<h3 className="card-member">
					{this.props.name}
				</h3>
				<p className="card-office">
					{this.props.office}
				</p>
				<img className="card-party" src={'./' + this.props.party + '.png'}></img>
			</div>
		);
  	}
};
