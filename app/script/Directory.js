import React from 'react';

export default class Directory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			reps: props.reps,
			focus: false,
			selected: null,
		}
	}

	updateSearch(event) {
		this.setState({ search: event.target.value })
	}

	selectRep(rep, event) {
		console.log("click")
		this.setState({ search: rep.name, selected: rep })
	}

	addFocus() {
		this.setState({ focus: true })
	}

	removeFocus() {
		this.setState({ focus: false })
	}

    render() {
		let filteredContacts = this.state.reps.filter((contact) => {
			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
		})
		let hidden = this.state.focus ? "" : "hidden"
		let url = this.state.selected && !this.state.focus ? this.state.selected.url : "javascript:void(0)"

        return (
			<div className="directory">
				<p className="font-white font-raleway form-label">
					Lookup other reps:
				</p>

				<form className="row">
					<div className="col-8 form-address directory-relative">
						<input
							name="address"
							type="text"
							id="address"
							className="form-input directory-input"
							placeholder="Congressmember's Name"
							value={this.state.search}
							onChange={this.updateSearch.bind(this)}
							onFocus={this.addFocus.bind(this)}
							onBlur={this.removeFocus.bind(this)}
						/>


						<ul className={"directory-list " + hidden}>
							{ filteredContacts.map( (rep,i) => {
								return (
									<li className="font-gray directory-list-member " key={i} onClick={this.selectRep.bind(this, rep)}>{rep.name}</li>
								)
							}) }
						</ul>
					</div>

					<div className="col-4 form-btn directory-btn">
						<a href={url}>Go</a>
					</div>
				</form>
			</div>
        );
    }
};
