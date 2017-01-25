import React from 'react';
import OfficeList from './OfficeList';
import Name from './Name.js'
// Card component
export default class Card extends React.Component {
    render() {
        var contact = this.props.contacts;
        var party = this.props.contact.party.charAt(0);

        return (
			<div className={"col-12 center "}>
				<div className="card row">
					<div className="col-12">
						/* Name should be super simple, with party logo */
						<Name party={party} name={this.props.contact.official_full} chamber={this.props.contact.role}></Name>
						/* Should be drop down box w/ download button */
						<OfficeList offices={this.props.contact.office_locations} ></OfficeList>

					</div>

				</div>
			</div>
        );
    }
};
