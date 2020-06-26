const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
  user: String,
  content: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("Messages", mySchema);
module.exports = model;
