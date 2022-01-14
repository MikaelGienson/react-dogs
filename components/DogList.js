import App from "../src/App";
import { NavLink } from "react-router-dom";

function DogList() {
  return (
    <div className="DogList">
      {App.defaultProps.dogs.map(({ name, src }) => (
        <div>
          <NavLink activeClassName="Dog-active-link" to={`/dogs/${name}`}>
            <div>
              <img src={src} alt={name}></img>
              <h1>{name}</h1>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default DogList;
