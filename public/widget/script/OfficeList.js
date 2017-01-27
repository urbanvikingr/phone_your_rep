import React from 'react';

export default class OfficeList extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleOfficeId: null
        }
		/* this.togglePanel = this.togglePanel.bind(this); */
    }

    togglePanel(officeId) {
		if (this.state.toggleOfficeId == officeId){
			this.setState({toggleOfficeId: null})
		}else{
	        this.setState({toggleOfficeId: officeId})
		}

    }

    render() {

		var offices = this.props.offices.map((office, i) => {
			return (<Office key={i} office={office} officeId={i} togglePanel={this.togglePanel.bind(this)} toggleOfficeId={this.state.toggleOfficeId}/>)
		})
		return (<div className="card-office-list">{offices}</div>);
    }
};

class Office extends React.Component {
    render() {
		var office = this.props.office.city;
		var tel_link = "tel"+this.props.office.phone;
		var address = (this.props.office.address ? this.props.office.address : "" ) + (this.props.office.suit ? this.props.office.suit : "");
		var city = (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state + ", " + this.props.office.zip;
		var building = (this.props.office.building ? this.props.office.building + ", " : "");

		var togglePanel = this.props.togglePanel;
		var officeId = this.props.officeId;
		var isHidden = (this.props.toggleOfficeId == officeId) ? null : "hidden";
		var caret = (this.props.toggleOfficeId == officeId) ? "fa fa-caret-down fa-white card-office-btn-caret" :  "fa fa-caret-up fa-white card-office-btn-caret"

        return (
            <div className="card-office">
                
            </div>
        )
    }
};
