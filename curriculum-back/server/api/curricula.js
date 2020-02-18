const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Hello Curricula!");
  })
  .post((req, res) => {
    res.send("Got a POST request");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(req.params);
  })
  .patch((req, res) => {
    res.send("Got a POST request");
  })
  .delete((req, res) => {
    res.send("Got a POST request");
  });

module.exports = router;
