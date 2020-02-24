const express = require("express");
const mongoose = require("mongoose");

const { Curriculum } = require("@db");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const curricula = await Curriculum.find();
    res.send(curricula);
  })
  .post(async (req, res) => {
    const { name, goal, description, sections } = req.body;
    const curriculum = new Curriculum({
      name,
      goal,
      description,
      sections
    });
    await curriculum.save();
    res.send(201, "Success");
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const curriculum = await Curriculum.findById(req.params.id);
    res.send(curriculum);
  })
  .patch((req, res) => {
    res.send("Got a POST request");
  })
  .delete(async (req, res) => {
    await Curriculum.deleteOne({ _id: req.params.id });
    res.send("Success");
  });

module.exports = router;
