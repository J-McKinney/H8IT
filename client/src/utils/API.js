import axios from "axios";

export default {
  // Gets all posts
  getUserPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the posts with the given id
  getUserPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the posts with the given id
  deleteUserPost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a posts to the database
  saveUserPost: function (postData) {
    return axios.post("/api/posts", postData);
  },
};
