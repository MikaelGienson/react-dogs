import { Component } from "react";
import App from "../../App";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h4>Dog Shelter</h4>
        <NavLink
          className="NavBar-navlink"
          activeClassName="active-link"
          exact
          to="/dogs"
        >
          Home
        </NavLink>
        {App.defaultProps.dogs.map(({ name }) => (
          <NavLink
            className="NavBar-navlink"
            activeClassName="active-link"
            exact
            to={`/dogs/${name}`}
          >
            {name}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default NavBar;
