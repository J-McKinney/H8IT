import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, CharLeft } from "../components/Form";

class Books extends Component {
  state = {
    posts: [],
    postTitle: "",
    userPost: "",
    charLeft: 600,
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getUserPosts()
      .then((res) =>
        this.setState({ posts: res.data, postTitle: "", userPost: "" })
      )
      .catch((err) => console.log(err));
  };

  deleteUserPost = (id) => {
    API.deleteUserPost(id)
      .then((res) => this.loadPosts())
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.postTitle) {
      API.saveUserPost({
        postTitle: this.state.postTitle,
        userPost: this.state.userPost,
      })
        .then((res) => this.loadPosts())
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Vent It Out:</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.postTitle}
                onChange={this.handleInputChange}
                name="postTitle"
                placeholder="Vent Title"
              />
              <TextArea
                value={this.state.userPost}
                onChange={this.handleInputChange}
                name="userPost"
                placeholder="Start Venting"
              />
              <CharLeft value={this.state.charLeft}>
                {this.state.charLeft - this.state.userPost.length}
              </CharLeft>
              <FormBtn
                disabled={!this.state.postTitle}
                onClick={this.handleFormSubmit}
              >
                Submit Vent
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Vent List:</h1>
            </Jumbotron>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map((post) => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        Venting About:
                        {" " + post.postTitle}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUserPost(post._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
