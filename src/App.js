import { Component } from "react";
import { whiskey, hazel, tubby } from "./imgs";

import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import { DogList, DogDetails, ErrorPage } from "./components";

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
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Navigate replace to="/dogs" />} />
            <Route path="/dogs" element={<DogList />} />
            <Route
              path="/dogs/:name"
              element={<DogDetails dogs={this.props.dogs} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}
