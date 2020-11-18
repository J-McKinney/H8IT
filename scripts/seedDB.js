const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Vent");

const userPostSeed = [
  {
    postTitle: "The Dead Zone",
    userPost:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures",
    dateCreated: new Date(Date.now()),
    expire_at: new Date(Date.now()),
  },
  {
    postTitle: "Lord of the Flies",
    userPost:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island",
    dateCreated: new Date(Date.now()),
    expire_at: new Date(Date.now()),
  },
  {
    postTitle: "The Catcher in the Rye",
    userPost: "The Catcher in the Rye is a 1951 novel by J. D. Salinger.",
    dateCreated: new Date(Date.now()),
    expire_at: new Date(Date.now()),
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(userPostSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
