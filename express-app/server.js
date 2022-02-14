const express = require("express");
const app = express();
const port = 3013;
const indexRouter = require("./routes/index.route");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("view engine", "twig");

app.use(express.static("public"));

app.use((request, response, next) => {
  request.message = "message middleware";
  next();
});

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
