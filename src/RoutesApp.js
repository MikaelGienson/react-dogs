import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { DogList, DogDetails, ErrorPage } from "./components";

export default class RoutesApp extends Component {
  render() {
    return (
      <Routes>
        <Route path="*" element={<ErrorPage />} />

        <Route path="/dogs" element={<DogList />} />
        <Route
          path="/dogs/:name"
          element={<DogDetails dogs={this.props.dogs} />}
        />
        <Route path="/" element={<Navigate replace to="/dogs" />} />
      </Routes>
    );
  }
}
