import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class DashBoard extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>Welcome To Vent</h1>
          <hr />
          <h3>Connect with others and Vent about it.</h3>
        </Jumbotron>
      </>
    );
  }
}

export default DashBoard;
