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

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await model.find(filter);
  return messages;
};
const updateText = async (id, content) => {
  const foundmessage = await model.findOne({ _id: id });
  foundmessage.content = content;
  const newMessage = await foundmessage.save();
  console.log(newMessage);

  return newMessage;
};
module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
};
