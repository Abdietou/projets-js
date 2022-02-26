const CategoryModel = require("../models/category.model");

exports.addCategory = (req, res, next) => {
  const newCategory = new CategoryModel({
    ...req.body,
  });

  newCategory.save((err, category) => {
    if (err) {
      console.log(err.message);
    }
    req.flash("success", "La catégorie est ajouté !");
    res.redirect("/add-category");
  });
};
