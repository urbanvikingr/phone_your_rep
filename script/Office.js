import React from 'react';
import ReportButton from './ReportButton';

export default class Office extends React.Component {
	constructor(){
		super();
		this.state = {
				showChildren: false
		}
	}

	showQR(e){

		e.target.nextElementSibling.innerHTML = `<img src=${this.props.office.qr_code_link} />`
		e.target.nextElementSibling.style.display = 'block'
		var meRect = e.target.getBoundingClientRect()
		var qrRect = e.target.nextElementSibling.getBoundingClientRect()
		var doc = document.documentElement;
		var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
		var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		var boxPos = {};

		boxPos.left = (e.pageX - left);
    boxPos.top = (e.pageY - top - qrRect.height);

		// 		boxPos.left = (e.pageX - $(window).scrollLeft());
		// 		boxPos.top = (e.pageY - $(window).scrollTop() - $(".info-box").height());
		e.target.nextElementSibling.style.left = boxPos.left + "px"
		e.target.nextElementSibling.style.top = boxPos.top + "px"
		// debugger;
		}

	leaveQR(e){
		e.target.nextElementSibling.style.display = 'none'
  }


	toggleInfo(){
    this.setState({showChildren: !this.state.showChildren})
	}
	render() {
		let chevronClass = "fa fa-chevron-down"
		var officeType = this.props.office.type.charAt(0).toUpperCase() + this.props.office.type.slice(1)
		var officeInfoId = "office-info" + this.props.officeId + this.props.cardId
		var telHref = "tel:" + this.props.office.phone
		var address = (this.props.office.address ? this.props.office.address + ", " : "" ) + (this.props.office.suit ? this.props.office.suit + ", " : "") + (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state;
		// + ", " + this.props.office.suit ? this.props.office.suit + ", " : "" + this.props.office.city ? this.props.office.city+ ", " :""  + this.props.office.state
		debugger;
		return(
			<div className="office ">
				<div className="office-header row">
					<span className="col-xs-2">
						<a data-toggle="collapse" data-target={"#"+officeInfoId} onClick={this.toggleInfo.bind(this)}>
						{this.state.showChildren ?
								<i className="fa fa-chevron-up officeIcons" aria-hidden="true"></i>
							: <i className="fa fa-chevron-down officeIcons" aria-hidden="true"></i>
						}
						</a>
					</span>
					<span className="col-xs-8 text-center"><h5>{officeType} Office - <a href={telHref}>{this.props.office.phone}</a></h5></span>
					<span className="col-xs-2">
						<a className="myAddressCard" href={this.props.office.v_card_link}>
							<i className="fa fa-address-card officeIcons"></i>
						</a>
						{this.props.office.qr_code_link ? <div className="QRcode"><i onMouseOver={this.showQR.bind(this)} onMouseLeave={this.leaveQR.bind(this)} className="fa fa-qrcode"></i><div className="qr-box"></div></div> : null}
					</span>
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

					<ReportButton />
				</div>
			</div>
		)
	}
};
