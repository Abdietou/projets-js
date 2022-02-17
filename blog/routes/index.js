var express = require("express");
var router = express.Router();
const Article = require("../models/article.model");

/* GET home page. */
router.get("/", function (req, res, next) {
  Article.find()
    .then((articles) => {
      res.render("index", { title: "Express", "articles": articles });
      //res.status(200).json(articles);
    })
    .catch((err) => {
      //res.status(200).json(err);
    });
});

module.exports = router;
