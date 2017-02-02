import React from 'react';

export default class Directory extends React.Component {
    render() {
        return (
			<form className="col-6 center directory">
				<div className="row">
					<div className="col-8 form-address">
						<input name="address" type="text" id="address" className="form-input" placeholder="Congressmember's Name"></input>
					</div>

					<div className="col-4 form-btn">
						Go
					</div>
				</div>
			</form >
        );
    }
};
