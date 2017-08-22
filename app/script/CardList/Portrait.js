import React from 'react'

export default class Portrait extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link : ""
    }
  }

  componentDidMount() {
    this.testImage(this.props.link)
  }

  testImage(URL) {
    const test = new Image()
    test.onload = this.imageFound.bind(this)
    test.onerror = this.imageNotFound.bind(this)
    test.src = URL
  }

  imageFound() {
    this.setState({link : this.props.link})
  }

  imageNotFound() {
    this.setState({link: "http://www.phoneyourrep.com/reps/images/person.png"})
  }

  render() {
    return (<img className="card-photo" src={this.state.link}/>)
  }
}
