const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/curriculum-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Curriculum = require("./Curriculum");

module.exports = {
  Curriculum
};
