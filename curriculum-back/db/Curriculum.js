const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const CurriculumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String
  },
  description: {
    type: String
  }
});

CurriculumSchema.plugin(timestamps);
const Curriculum = mongoose.model("Curriculum", CurriculumSchema);

//const curriculum = new Curriculum({ name: "Python" });
//curriculum.save().then(() => console.log("curriculum saved"));

module.exports = Curriculum;
