import React from 'react';

export default class OfficeList extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleOfficeId = 0
        }
		this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        console.log("test");
    }

    render() {

		var offices = this.props.offices.map((office, i) => {
			return (<Office key={i} office={office} officeId={i} togglePanel={this.togglePanel}/>)
		})
		return (<div className="card-office-list">{offices}</div>);
    }
};

class Office extends React.Component {
    constructor() {
        super();
        this.state = {
            showChildren: false
        }
		this.togglePanel = this.togglePanel.bind(this)
    }

    togglePanel() {
        this.setState({
            showChildren: !this.state.showChildren
        });
    }

    render() {
        console.log(this.props);
		var office = this.props.office.city + " Office";
		var tel_link = "tel"+this.props.office.phone;
		var address = (this.props.office.address ? this.props.office.address : "" ) + (this.props.office.suit ? this.props.office.suit : "");
		var city = (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state + ", " + this.props.office.zip;
		var building = (this.props.office.building ? this.props.office.building + ", " : "");
		var is_hidden = this.state.showChildren ? null : "hidden";

        return (
            <div className="card-office">
                <button className="card-office-btn" onClick={this.props.togglePanel}>
					<h1 className="card-office-btn-name">{office}</h1>
					<a className="card-office-btn-link" href={this.props.office.v_card_link}>download</a>
                </button>
                <div className={"card-office-panel " + is_hidden}>
					<h2>Phone:</h2>
					<a href={tel_link}>{this.props.office.phone}</a>

					<h2>Address:</h2>
					<p>{building}</p>
					<p>{address}</p>
					<p>{city}</p>
                </div>
            </div>
        )
    }
};
