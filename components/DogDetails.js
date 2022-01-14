import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dogDetails = dogs.filter((dog) => dog.name === name);

  return (
    <div className="DogDetails">
      {dogDetails.map((dog) => (
        <div className="full-card" key={""}>
          <h2>Name: {dog.name}</h2>
          <img src={dog.src} alt={dog.name} />
          <h4>Age: {dog.age}</h4>
          {dog.facts.map((fact) => (
            <h4>{fact}</h4>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DogDetails;
