var express = require("express");
var router = express.Router();
const articleController = require("../controllers/article.controller");
const multerConfig = require("../middlewares/multer.config");
const articleValidator = require("../middlewares/validators/article.validator");

/* GET home page. */
router.get("/", articleController.listArticle);

router.get("/article/:id", articleController.showArticle);

router.get("/add-article", articleController.addArticle);

router.post(
  "/add-article",
  multerConfig,
  articleValidator,
  articleController.addOneArticle
);

router.get("/edit-article/:id", articleController.editArticle);

router.post(
  "/edit-article/:id",
  multerConfig,
  articleController.editOneArticle
);

module.exports = router;
