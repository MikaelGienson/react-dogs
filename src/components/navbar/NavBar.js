import { Component } from "react";
import App from "../../App";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" exact to="/dogs">
          Dog Shelter
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/dogs/">
                Home
              </NavLink>
            </li>
            {App.defaultProps.dogs.map(({ name }) => (
              <li className="navbar-item">
                <NavLink className="nav-link" exact to={`/dogs/${name}`}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
