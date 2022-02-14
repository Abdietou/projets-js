const { Validator } = require("node-input-validator");

contactValidator = (req, res, next) => {
  const formIsValid = new Validator(req.body, {
    email: "required|email",
    subject: "required",
    message: "required",
  });

  formIsValid.check().then((matched) => {
    if (!matched) {
      res.render("contact", { formError: formIsValid.errors });
      return;
      //res.status(422).send(formIsValid.errors);
    }
    next();
  });
};

module.exports = contactValidator;
