import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


// each new component has to extend the base React.Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    }

  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() { // call the render method which tells react when to update view
    var user = {
      name: "Des",
      age: 23,
      hobbies: ["soccer","football","fishing"]
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Home
              name={"Max"}
              InitialAge={28}
              user={user}
              changeLink={this.onChangeLinkName.bind(this)} // we need to bind as
              //we used this keyword in the onChangeLinkName function definition
              initialLinkName={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
