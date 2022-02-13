const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3013;

app.set("view engine", "twig");

app.use(express.static("public"));

app.use((request, response, next) => {
  request.message = "message middleware";
  next();
});

app.get("/", (request, response) => {
  //response.sendFile(__dirname + "/index.html");
  response.render("index", { title: "home page" });
});

app.get("/contact", (request, response) => {
  //console.log(request.message);
  //response.sendFile(__dirname + "/contact.html");
  response.render("contact");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
