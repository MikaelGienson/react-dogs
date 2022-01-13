import { Component } from "react";
import whiskey from "../imgs/whiskey.jpg";
import hazel from "../imgs/hazel.jpg";
import tubby from "../imgs/tubby.jpg";
import DogList from "../components/DogList";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import DogDetails from "../components/DogDetails";
import ErrorPage from "../components/ErrorPage";

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>Dog Shelter</h1>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path="/dogs" element={<DogList />} />
            <Route exact path="/dogs/:name" element={<DogDetails />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

// {this.props.dogs.map(({ name, age, facts, src }) => (
//   <Route
//     exact
//     path="/dogs/:name"
//     render={(renderProps) => (
//       <DogDetails
//         name={renderProps.match.params.name}
//         age={age}
//         facts={facts}
//         img={src}
//       />
//     )}
//   />
// ))}
