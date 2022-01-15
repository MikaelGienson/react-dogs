import { Link, useParams, useNavigate } from "react-router-dom";
import "./DogDetails.css";
import { Button } from "reactstrap";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dogDetails = dogs.filter((dog) => dog.name === name);

  return (
    <div className="DogDetails">
      {dogDetails.map((dog, idx) => (
        <div className="DogDetails-card" key={`${dog.name}${idx}`}>
          <img className="Dog-img" src={dog.src} alt={dog.name} />
          <h2>{dog.name}</h2>
          <h4>{dog.age} years old</h4>
          {dog.facts.map((fact) => (
            <h4>{fact}</h4>
          ))}
          <Link to="/dogs">
            <Button color="primary">Go Back!</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogDetails;
