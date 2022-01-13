import { Component } from "react";
import App from "../src/App";
import { Route, Routes } from "react-router-dom";
import DogDetails from "./DogDetails";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        {App.defaultProps.dogs.map(({ name, age, facts, src }) => (
          <DogDetails name={name} img={src} />
        ))}
      </div>
    );
  }
}
