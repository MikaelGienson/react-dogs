import App from "../../App";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList() {
  return (
    <div>
      <h1 className="display-1 text-center my-5">Click a Dog!</h1>
      <div className="row">
        {App.defaultProps.dogs.map(({ name, src }) => (
          <div className="Dog col-lg-4 text-center">
            <img src={src} alt={name}></img>
            <h3 className="mt-3">
              <Link key={name} className="underline" to={`/dogs/${name}`}>
                {name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
