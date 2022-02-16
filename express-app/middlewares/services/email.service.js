const nodeMailer = require("nodemailer");

sendMail = (req, res, next) => {
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdietou@gmail.com",
      pass: "wwtuyasz",
    },
  });
  var message =
    "Email de : " + req.body.email + "<br>Message: " + req.body.message;

  var mailOptions = {
    form: req.body.email,
    to: "abdietou@gmail.com",
    subject: req.body.subject,
    html: message,
  };

  transporter.sendMail(mailOptions, (err, infos) => {
    if (err) {
      console.log(err);
      res.render("contact", {
        title: "contact page",
        error: "Sorry your message could not be send",
      });
      next();
    } else {
      console.log(infos);
      res.render("contact", {
        title: "contact page",
        success: "Your message has been sent successfully",
      });
      next();
    }
  });
};

module.exports = sendMail;
