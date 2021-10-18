import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

class DashBoard extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>Welcome To Vent</h1>
          <hr />
          <Link to="/posts">
            <h3>Connect with others and Vent about it.</h3>
          </Link>
        </Jumbotron>
      </>
    );
  }
}

export default DashBoard;
