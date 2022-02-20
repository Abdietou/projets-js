const Article = require("../models/article.model");
const Category = require("../models/category.model");
const fs = require("fs");

exports.listArticle = (req, res) => {
  Article.find()
    .then((articles) => {
      res.render("index", { title: "Express", articles: articles });
      //res.status(200).json(articles);
    })
    .catch((err) => {
      //res.status(200).json(err);
    });
};

exports.showArticle = (req, res) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      //console.log(article);
      res.render("single-article", { article: article });
    })
    .catch((err) => {
      res.redirect("/");
      //console.log(err);
    });
};

exports.addArticle = (req, res) => {
  Category.find()
    .then((categories) => {
      res.render("add-article", {
        categories: categories,
      });
    })
    .catch(() => {
      res.redirect("/");
    });
};

exports.addOneArticle = (req, res) => {
  var article = new Article({
    ...req.body,
    image: `${req.protocol}://${req.get("host")}/images/articles/${
      req.file.filename
    }`,
    publishedDate: Date.now(),
  });

  article.save((err, article) => {
    // if (err) {
    //   Category.find()
    //     .then((categories) => {
    //       res.render("add-article", {
    //         categories: categories,
    //         error: "Article KO",
    //       });
    //     })
    //     .catch(() => {
    //       res.redirect("/");
    //     });
    // } else {
    //   Category.find()
    //     .then((categories) => {
    //       res.render("add-article", {
    //         categories: categories,
    //         success: "Article OK",
    //       });
    //     })
    //     .catch(() => {
    //       res.redirect("/");
    //     });
    // }

    if (err) {
      req.flash("error", "Ajout Article KO !");
      return res.redirect("/add-article");
    }
    req.flash("success", "Ajout Article OK !");
    return res.redirect("/add-article");
  });
};

exports.editArticle = (req, res) => {
  const id = req.params.id;
  Article.findOne({ _id: id }, (err, article) => {
    if (err) {
      req.flash("error", err.message);
      return res.redirect("/");
    }
    Category.find((err, categories) => {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("/");
      }
      console.log(categories);
      console.log(article);
      return res.render("edit-article", {
        categories: categories,
        article: article,
      });
    });
  });
};

exports.editOneArticle = (req, res) => {
  const id = req.params.id;
  Article.findOne({ _id: id }, (err, article) => {
    if (err) {
      req.flash("error", err.message);
      return res.redirect("/edit-article/" + id);
    }

    if (req.file) {
      const fileName = article.image.split("/articles")[1];
      fs.unlink(`public/images/articles/${fileName}`, () => {
        console.log("Fichier supprimé : " + fileName);
      });
    }

    article.title = req.body.title ? req.body.title : article.title;
    article.category = req.body.category ? req.body.category : article.category;
    article.content = req.body.content ? req.body.content : article.content;
    article.image = req.file
      ? `${req.protocol}://${req.get("host")}/images/articles/${
          req.file.filename
        }`
      : article.image;

    article.save((err, article) => {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("/edit-article/" + id);
      }
      req.flash("success", "Article modifié");
      return res.redirect("/edit-article/" + id);
    });
  });
};
