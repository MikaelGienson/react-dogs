import { Component } from "react";
import App from "../src/App";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact activeClassName="active-link" to="/dogs">
          Home
        </NavLink>
        {App.defaultProps.dogs.map(({ name }) => (
          <NavLink exact activeClassName="active-link" to={`/dogs/${name}`}>
            {name}
          </NavLink>
        ))}
      </div>
    );
  }
}
