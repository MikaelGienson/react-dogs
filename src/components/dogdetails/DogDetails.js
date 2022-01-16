import { Link, useParams } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dogDetails = dogs.filter((dog) => dog.name === name);

  return (
    <div className="DogDetails row justify-content-center mt-5">
      <div className="col-11 col-lg-5">
        {dogDetails.map((dog, idx) => (
          <div className="DogDetails-card card" key={`${dog.name}${idx}`}>
            <img className="card-img-top" src={dog.src} alt={dog.name} />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
              {dog.facts.map((fact, i) => (
                <ul className="list-group list-group-flush" key={i}>
                  <li className="list-group-item px-0">{fact}</li>
                </ul>
              ))}
              <div className="card-body">
                <Link to="/dogs">
                  <div className="btn btn-info">Go Back!</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogDetails;
