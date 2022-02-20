var express = require("express");
var router = express.Router();
const articleController = require("../controllers/article.controller");
const multerConfig = require("../middlewares/multer.config");
const articleValidator = require("../middlewares/validators/article.validator");

/* GET home page. */
router.get("/", articleController.list);

router.get("/article/:id", articleController.show);

router.get("/add-article", articleController.add);

router.post(
  "/add-article",
  multerConfig,
  articleValidator,
  articleController.addOne
);

module.exports = router;
