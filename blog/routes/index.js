var express = require("express");
var router = express.Router();
const Article = require("../models/article.model");

/* GET home page. */
router.get("/", function (req, res, next) {
  Article.find()
    .then((articles) => {
      res.render("index", { title: "Express", articles: articles });
      //res.status(200).json(articles);
    })
    .catch((err) => {
      //res.status(200).json(err);
    });
});

router.get("/article/:id", (req, res) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      //console.log(article);
      res.render("single-article", { article: article });
    })
    .catch((err) => {
      res.redirect("/");
      //console.log(err);
    });
});

module.exports = router;
