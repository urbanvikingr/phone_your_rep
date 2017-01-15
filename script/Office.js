import React from 'react';

export default class Office extends React.Component {
	render() {
		var officeType = this.props.office.type.charAt(0).toUpperCase() + this.props.office.type.slice(1)
		var officeInfoId = "office-info" + this.props.officeId

		var address = (this.props.office.address ? this.props.office.address + ", " :"" ) + (this.props.office.suit ? this.props.office.suit + ", " : "") + (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state;
		// + ", " + this.props.office.suit ? this.props.office.suit + ", " : "" + this.props.office.city ? this.props.office.city+ ", " :""  + this.props.office.state
			// debugger;
		return(
			<div className="office">
				<div className="office-header">
					<a data-toggle="collapse" data-target={"#"+officeInfoId}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
					{officeType} Office - {this.props.office.phone}
					<i className="fa fa-address-card"></i>
				</div>
				<div id={officeInfoId} className="collapse">
					<p>Address: {address}</p>
					<p>Fax: {this.props.office.fax}</p>
					{/*District Type Office - Phone - Vcard */}
					{/* type
							address
							suit
							city
							state
					*/}
				</div>
			</div>
		)
	}
};