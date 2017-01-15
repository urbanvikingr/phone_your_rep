import React from 'react';

export default class ReportButton extends React.Component {
	render() {
	function nothingToSend() {
		var phone = document.getElementById("number");
		var location = document.getElementById("office");
		var vCard = document.getElementById("trouble");
		var email = document.getElementById("incorrect");

	if(phone.checked == false && location.checked == false && vCard.checked == false && email.checked == false) {
		alert("It looks like there's no issue for you to send us!");
	}
}
		return(
		<div className="floatingDiv">
		<button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#reportIssue">Report Issue</button>
		<div className="modal fade" id="reportIssue" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							 <h4 className="modal-title">Report an issue</h4>
							<div className="modal-body">
					<p>Which information is wrong?</p>
						<div className="radio">
							<label><input type="checkbox" id="number" name="phone" /> Incorrect Phone Number</label>
						</div>

						<div className="radio">
							<label><input type="checkbox" id="office" name="location" /> Office Location Moved</label>
						</div>

						<div className="radio">
							<label><input type="checkbox" id="trouble" name="vcard" /> Trouble Downloading V-Card</label>
						</div>

						<div className="radio">
							<label><input type="checkbox" id="incorrect" name="email" /> Incorrect Email</label>
						</div>

						<div className="modal-footer">
							<button type="button" id="nothingToSend" className="btn btn-default" data-dismiss="modal" onClick={nothingToSend}>Send</button>
						</div>

					</div>
				</div>
	   	</div>
		</div>
	</div>
</div>
		)
	}
}
