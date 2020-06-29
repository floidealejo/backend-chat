const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
  chat: { type: Schema.ObjectId, ref: "chat" },
  user: { type: Schema.ObjectId, ref: "Users" },
  content: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("Messages", mySchema);
module.exports = model;
