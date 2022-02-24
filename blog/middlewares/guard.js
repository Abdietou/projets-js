exports.guard = (req, res, next) => {
  if (!req.user) {
    req.flash("warning", "Vous n'êtes pas authentifié");
    return res.redirect("/users/login");
  }

  next();
};
