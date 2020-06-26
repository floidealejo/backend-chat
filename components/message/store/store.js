const mongoose = require('mongoose');
const model = require('../models/models');
//mongodb+srv://db_user_chat:uN1p7xwP8s2P@clusterchat-8nlmx.mongodb.net/db_chat
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://db_user_chat:uN1p7xwP8s2P@clusterchat-8nlmx.mongodb.net/db_chat',
  { useNewUrlParser: true }
);
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
