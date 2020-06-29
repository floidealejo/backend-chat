const mongoose = require("mongoose");
const model = require("../models/models");

const addMessage = (message) => {
  const myMessage = new model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    model
      .find(filter)
      .populate("user")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
};
const updateText = async (id, content) => {
  const foundmessage = await model.findOne({ _id: id });
  foundmessage.content = content;
  const newMessage = await foundmessage.save();
  console.log(newMessage);

  return newMessage;
};

const removeMessage = async (id) => {
  const removeMessage = await model.deleteOne({ _id: id });
  return removeMessage;
};
module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  delete: removeMessage,
};
