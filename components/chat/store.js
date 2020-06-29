const mongoose = require("mongoose");
const model = require("../chat/model");

const addChat = (chat) => {
  const myChat = new model(chat);
  myChat.save();
};

const getChat = async (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = { users: userId };
    }
    model
      .find(filter)
      .populate("users")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
};
module.exports = {
  add: addChat,
  list: getChat,
};
