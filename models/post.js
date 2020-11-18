const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: { type: String, required: true },
  userPost: String,
  dateCreated: { type: Date, default: Date.now },
  expire_at: { type: Date, default: Date.now, expires: 60 }, // the document expires after however many seconds
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
