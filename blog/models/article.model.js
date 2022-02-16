const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  name: String,
  content: String,
  publishedDate: Date,
});

module.exports = mongoose.model("Article", articleSchema);
