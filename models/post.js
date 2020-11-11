const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: { type: String, required: true },
  userPost: String,
  date: { type: Date, default: Date.now },
});

const UserPost = mongoose.model("UserPost", postSchema);

module.exports = UserPost;
