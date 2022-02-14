var express = require("express");
const router = express.Router();
const contactValidator = require("../middlewares/validators/contact.validator");
const sendEmail = require("../middlewares/services/email.service");

// Get home page
router.get("/", (request, response) => {
  response.render("index", { title: "home page" });
});

// Get contact page
router.get("/contact", (request, response) => {
  response.render("contact", { title: "contact page" });
});

router.post("/contact", contactValidator, sendEmail);

module.exports = router;
