const multer = require("multer");

const MiME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// sauvegarder fichier sur le disque du serveur
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images/articles");
  },
  filename: (req, file, callback) => {
    var name = Math.floor(Math.random() * Math.floor(1525652325)).toString();
    name += Math.floor(Math.random() * Math.floor(152756523)).toString();
    name += Math.floor(Math.random() * Math.floor(9525652385)).toString();
    name += Math.floor(Math.random() * Math.floor(825652125)).toString();
    name += Date.now() + ".";

    const extension = MiME_TYPES[file.mimetype];
    name += extension;

    callback(null, name);
  },
});

module.exports = multer({ storage }).single("image");
