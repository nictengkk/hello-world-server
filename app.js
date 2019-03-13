const express = require("express");
const app = express();

//middleware
const index = require("./routes/index");
const students = require("./routes/students");
const logger = require("./logger");

//express.static is a middleware, which handles static data (html). Hence use app.use, as we wanna USE it.
app.use(express.static("public"));
//middleware that body pareses information/data that can be handled.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//any routes declared before this will not be affected by the logger function.
app.use(logger);

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/greet", (req, res) => {
  const { name, greet } = req.query; //comes from the url www.asddasad.com/greet/name
  res.send(`${greet}, ${name}👋`);
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params; //comes from the url www.asddasad.com/greet/name
  res.send(`Hello, ${name}👋`);
});

app.post("/greet", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}`);
});

app.post("/form", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name} 👋`);
});

app.use("/", index);
app.use("/students", students);

module.exports = app;
