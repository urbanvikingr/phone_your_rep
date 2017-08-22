import React from 'react';
import Office from './Office';

export default class OfficeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOfficeId: null
    }
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(officeId) {
    if (this.state.toggleOfficeId == officeId){
      this.setState({toggleOfficeId: null})
    } else {
      this.setState({toggleOfficeId: officeId})
    }
  }

  render() {
    var offices = this.props.offices.map((office, i) => {
      return (
        <Office key={i}
          office={office}
          officeId={i}
          togglePanel={this.togglePanel}
          toggleOfficeId={this.state.toggleOfficeId}
        />
      )
    })
    return <div className="card-office-list">{offices}</div>
  }
};
