import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = { //this.state is a property provided by react component
      age: props.InitialAge,
      status: 0,
      homeLink: "Changed Link"
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age +3
    });
    console.log(this.state.status);
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onChangeHandeler(event) {
    this.setState({
      homeLink: event.target.value // the input box value
    });
  }
  render() {

    return(
      <div>
        <p> I'm a new Component</p>
        <p>Your name is: {this.props.name}</p>
        <p>Your age is: {this.state.age}</p>
        <button className="btn-primary" onClick={this.onMakeOlder.bind(this)}>Change My Age</button>
        <hr/>
        <div>My Hobbies are:
        <ul>
          {this.props.user.hobbies.map((hobby, i)=><li key={i}>{hobby}</li>)}
        </ul></div>
        <hr/>
        <div><button className="btn-primary" onClick={this.onChangeLink.bind(this)}>Change Home Link</button>
        <input type="text" value={this.state.homeLink} 
          onChange={(event) => this.onChangeHandeler(event)} /></div>
      </div>
    );
  }
}

Home.PropTypes = {
  name: PropTypes.string,
  InitialAge: PropTypes.number,
  user: PropTypes.object
}
