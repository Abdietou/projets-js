const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  name: String,
  content: String,
  publishedDate: Date,
});

module.exports = mongoose.model("Article", articleSchema);
