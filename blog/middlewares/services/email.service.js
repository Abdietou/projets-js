const nodemailer = require("nodemailer");

const sendResetMail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdietou@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  var message = "<br>Message: " + req.body.message;

  var mailOptions = {
    form: "abdietou@gmail.com",
    to: req.body.email,
    subject: "Reinitialisation de votre mot de passe",
    html: message,
  };

  transporter.sendMail(mailOptions, (err, infos) => {
    if (err) {
      console.log(err);
      req.flash("err", err.message);
      return res.redirect("/users/forgot-password");
    } else {
      console.log(infos);
      req.flash("success", "Reinit OK !");
      return res.redirect("/users/forgot-password");
    }
  });
};

module.exports = sendResetMail;
