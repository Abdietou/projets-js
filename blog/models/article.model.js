const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  image: String,
  publishedDate: Date,
});

module.exports = mongoose.model("Article", articleSchema);
