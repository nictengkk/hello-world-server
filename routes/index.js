const express = require("express");
const router = express.Router();

//on request
router.get("/", (req, res) => {
  res.end("Hello");
});

module.exports = router;
