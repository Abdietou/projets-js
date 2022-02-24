const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const passport = require("passport");
const randomToken = require("random-token");
const Reset = require("../models/reset.model");

module.exports = {
  login: (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    req.login(user, (err) => {
      if (err) {
        req.flash("error", err.message);
        res.redirect("/users/login");
      }

      passport.authenticate("local", {
        failureRedirect: "/users/login",
        failureFlash: "login ou mot de passe incorrect",
      })(req, res, (err, user) => {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/users/login");
        }
        req.flash("success", "Compte connecté");
        return res.redirect("/users/dashboard");
      });
    });
  },
  signup: (req, res, next) => {
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //   // Store hash in your password DB.
    //   if (err) {
    //     req.flash("error", err.message);
    //     res.redirect("/users/signup");
    //   }

    //   const newUser = User({
    //     ...req.body,
    //     password: hash,
    //   });
    //   newUser.save((err, user) => {
    //     if (err) {
    //       req.flash("error", err.message);
    //       res.redirect("/users/signup");
    //     }
    //     req.flash("success", "Compte OK !");
    //     res.redirect("/users/login");
    //   });
    // });

    const newUser = User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });

    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("/users/signup");
      }
      // Authentication
      passport.authenticate("local")(req, res, (err, newUser) => {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/users/signup");
        }
        req.flash("success", "Compte connecté");
        return res.redirect("/users/dashboard");
      });
    });
  },
  resetPassword: (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        req.flash("error", err.message);
        return res.redirect("/users/forgot-password");
      }
      if (!user) {
        req.flash("error", "login non trouvé");
        return res.redirect("/users/forgot-password");
      }
      // création de token
      const token = randomToken(32);
      const reset = new Reset({
        username: req.body.username,
        resetPasswordToken: token,
        resetExpires: Date.now() + 3600000,
      });
      reset.save((err, reset) => {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/users/forgot-password");
        }
        // email de réinitialisation
        req.body.email = user.email;
        req.body.message =
          "<h3>Bonjour " +
          user.username +
          "</h3>" +
          "<br>" +
          "Cliquez sur ce lien pour reinitialiser votre mot de passe : <br>" +
          req.protocol +
          "://" +
          req.get("host") +
          "/users/reset-password/" +
          token;
        next();
      });
    });
  },
  resetPasswordForm: (req, res, next) => {
    const token = req.params.token;
    Reset.findOne(
      {
        resetPasswordToken: token,
        resetExpires: { $gt: Date.now() },
      },
      (err, reset) => {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/users/forgot-password");
        }
        if (!reset) {
          req.flash("error", "Le token est invalide");
          return res.redirect("/users/forgot-password");
        }
        req.flash("success", "Changez votre mot de passe");
        return res.render("reset-password");
      }
    );
  },
  postResetPassword: (req, res, next) => {
    const token = req.params.token;
    const password = req.body.password;

    Reset.findOne(
      {
        resetPasswordToken: token,
        resetExpires: { $gt: Date.now() },
      },
      (err, reset) => {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/users/forgot-password");
        }
        if (!reset) {
          req.flash("error", "Le token est invalide");
          return res.redirect("/users/forgot-password");
        }

        User.findOne({ username: reset.username }, (err, user) => {
          if (err) {
            req.flash("error", err.message);
            return res.redirect("/users/forgot-password");
          }
          if (!user) {
            req.flash("error", "user non trouvé !");
            return res.redirect("/users/forgot-password");
          }
          user.setPassword(password, (err) => {
            if (err) {
              req.flash("error", "Mot de passe impossible a changé !");
              return res.redirect("/users/forgot-password");
            }
            user.save();

            Reset.deleteMany(
              { username: user.username },
              (errDelete, message) => {
                if (errDelete) {
                  console.log(errDelete);
                }
                console.log(message);
              }
            );
          });
        });
        req.flash("success", "Votre mot de passe a été mis à jour !");
        return res.redirect("/users/login");
      }
    );
  },
};
