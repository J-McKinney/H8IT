const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postTitle: { type: String, required: true },
  userPost: String,
  dateCreated: { type: Date, default: Date.now },
  expire_at: { type: Date, default: Date.now, expires: 900 }, // the document expires after 60*15=15 minutes
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
