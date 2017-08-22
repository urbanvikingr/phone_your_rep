import React from 'react';
import DirectoryInput from './Directory/DirectoryInput'
import DirectoryList from './Directory/DirectoryList'
import { apiUrl } from './apiUrl'

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

  componentWillMount() {
    var request = new XMLHttpRequest();
    var url = `${apiUrl}reps/ids?level=national`;
    request.open("GET", url);
    request.addEventListener("load", () => {
      var reps = JSON.parse(request.response);
      this.setState({ reps: reps })
    });
    request.send();
  }

  updateSearch(event) {
    let value = event.target.value
    this.setState({
      search: value,
      focus: (value === "" ? false : true)
    })
  }

  selectRep(rep) {
    this.setState({ search: rep.official_full, selected: rep, focus: false })
  }

  addFocus() {
    this.setState({ focus: true })
  }

  render() {
    let filteredContacts = this.state.reps.filter((contact) => {
      return contact.official_full.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    let hidden = this.state.focus ? "" : "hidden"
    let queryString = this.state.selected && !this.state.focus ? `reps?official_ids=${this.state.selected.official_id}` : "javascript:void(0)"

    return (
      <div className="directory">
        <p className="font-white font-raleway form-label">
          Look up reps by name:
        </p>

        <div className="row">
          <div className="col-8 form-address directory-relative">
            <DirectoryInput
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              onFocus={this.addFocus.bind(this)} />
            <DirectoryList
              contacts={filteredContacts}
              onClick={this.selectRep.bind(this)}
              hidden={hidden} />
            </div>

          <div className="col-4 form-btn directory-btn" onClick={() => this.props.getURL(apiUrl + queryString)}>
            <span>Go</span>
          </div>
        </div>
      </div>
    );
  }	
};
