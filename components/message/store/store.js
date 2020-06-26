const mongoose = require("mongoose");
const model = require("../models/models");
const dotenv = require("dotenv");

dotenv.config({ path: `.env` });
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

console.log(`[db] conectada con exito`);

const addMessage = (message) => {
  // list.push(message);
  const myMessage = new model(message);
  myMessage.save();
};

const getMessages = () => {
  return list;
};
module.exports = {
  add: addMessage,
  list: getMessages,
};
