const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Curricula!");
});

router.post("/", (req, res) => {
  res.send("Got a POST request");
});

router.get("/:id", (req, res) => {
  res.send("Hello Curricula!");
});

router.patch("/:id", (req, res) => {
  res.send("Got a POST request");
});

router.delete("/:id", (req, res) => {
  res.send("Got a POST request");
});

module.exports = router;
