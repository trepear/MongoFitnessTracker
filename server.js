const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

// for morgan npm
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// use mongoose to connect to robo3t
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./Develop/routes/api.js"));
app.use(require("./Develop/routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});