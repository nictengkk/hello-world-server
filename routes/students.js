const express = require("express");
const router = express.Router();

const students = [
  { name: "Bob", subjects: ["science", "math"] },
  { name: "Marley", subjects: ["art", "english"] },
  { name: "Cry", subjects: ["history", "english"] }
];

//app.route (or router.route) is used when there is a similar route for different methods. Now we can group all of them together.
router
  .route("/")
  .get((req, res) => {
    res.json(students); //sends a json response
  })
  .post((req, res) => {
    const student = req.body; //req.body only has {name: "Tom"}
    student.id = "123"; //
    res.status(201); //sets a status of 201 to be responded.
    res.json(student); //sends back a JSON response.
  });

router
  .route("/:id") //req.params
  .put((req, res) => {
    const student = req.body;
    res.status(202).json(student);
  })
  .delete((req, res, next) => {
    res.status(202).end();
  });

module.exports = router;
