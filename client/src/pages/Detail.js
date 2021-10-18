import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    post: {},
  };
  // When this component mounts, grab the post with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/........
  componentDidMount() {
    API.getUserPost(this.props.match.params.id)
      .then((res) => this.setState({ post: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Venting About: {this.state.post.postTitle}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Vent:</h1>
              <p>{this.state.post.userPost}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/posts">← Back to All Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
