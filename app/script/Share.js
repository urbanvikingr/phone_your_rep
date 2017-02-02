import React from 'react';

export default class Share extends React.Component {
    render() {
        return (
			<a className="card-share-link" href={this.props.url}>
				<i className="fa fa-icon fa-share-square-o" aria-hidden="true"></i>
				Share
			</a>
		);
    }
};
