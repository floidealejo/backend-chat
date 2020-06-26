const mongoose = require("mongoose");
const model = require("../models/models");
const dotenv = require("dotenv");

dotenv.config({ path: `.env` });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(`[db] conectada con exito`);

const addMessage = (message) => {
  const myMessage = new model(message);
  myMessage.save();
};

const getMessages = async () => {
  // return list;
  const messages = await model.find();
  return messages;
};
module.exports = {
  add: addMessage,
  list: getMessages,
};
