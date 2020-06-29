const mongoose = require("mongoose");
const model = require("../user/models");

const addUser = (user) => {
  const myUser = new model(user);
  return myUser.save();
};

const getUsers = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }
  const users = await model.find(filter);
  return users;
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
  add: addUser,
  list: getUsers,
  updateText: updateText,
  delete: removeMessage,
};
