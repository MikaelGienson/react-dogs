import App from "../../App";
import { NavLink } from "react-router-dom";
import "./DogList.css";
import { NavBar } from "../";

function DogList() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <h1>Click a Dog!</h1>
      <div className="DogList">
        {App.defaultProps.dogs.map(({ name, src }, idx) => (
          <div>
            <NavLink
              key={idx}
              className="DogList-navlink"
              activeClassName="Dog-active-link"
              to={`/dogs/${name}`}
            >
              <div className="DogList-details">
                <img className="circular-img" src={src} alt={name}></img>
                <h1>{name}</h1>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
