import React from "react";

// a stateless component is defined with const and is a function that only has
// a return statement,it also only makes changes through props
export const Header = (props) =>  {
    return(
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.homeLink}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    );
};
