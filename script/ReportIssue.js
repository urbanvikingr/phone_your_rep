import React from 'react';
import Issue from './Issue';
import './apiInfo';

export default class ReportIssue extends React.Component {
	constructor(){
		super();
		this.state = {
			issues: [],
			selected: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitReport = this.submitReport.bind(this);
		this.getIssues = this.getIssues.bind(this);
	}
	getIssues(){
		var url = apiUrl + "api/beta/issues/new"
		fetch(url).then(response => response.json().then(data => this.setState({issues: data.issue_categories})))
		// this.setState({issues:['Incorrect phone number', 'Office location moved', 'Trouble downloading v-card', 'Incorrect Email']})
	}

	handleChange(e){
		let indexOfTarget = this.state.selected.indexOf(e.target.getAttribute("data-issue"))
		let issue = e.target.getAttribute("data-issue")

		if (e.target.checked && indexOfTarget == -1) {
			this.setState({selected: this.state.selected.concat([issue])})
		}
		else if (!e.target.checked && indexOfTarget != -1){
			var newSelected = this.state.selected.slice();
			newSelected.splice(indexOfTarget, 1);
			this.setState({selected: newSelected})
		}
	}

	submitReport(){
		if(this.state.selected.length == 0) {
			console.log("It looks like there's no issue for you to send us!");
		}
		else{
			var issueSubmission = {
				issue: {
					issue_type: this.state.selected,
					office_location_id: this.props.officeId
				}
			}
			var url = apiUrl + "api/beta/issues"
			$.post(url,issueSubmission);
		}
	}

	render() {
		return(
			<div>
				<i type="button" className="fa fa-exclamation-triangle" data-toggle="modal" onClick={this.getIssues} data-target={"#reportIssue" + this.props.officeCardId}></i>
				<div className="modal fade" id={"reportIssue" + this.props.officeCardId} role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Report an issue</h4>
								<div className="modal-body">
									<p>Which information is wrong?</p>
									{this.state.issues.map((issue,i) => {
										return(
											<Issue key={i} issue={issue} handleChange={this.handleChange}/>
										);
									})
									}


									<div className="modal-footer">
										<button type="button" id="nothingToSend" className="btn btn-default" data-dismiss="modal" onClick={this.submitReport}>Send</button>
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
