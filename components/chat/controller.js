const store = require("./store");
const addChat = (users) => {
  const chat = {
    users: users,
    date: new Date(),
  };
  return new Promise((resolve, reject) => {
    try {
      store.add(chat);
      return resolve(chat);
    } catch (err) {
      if (!users || !Array.isArray(users)) {
        console.error(`[${err.message}] No hay usuario o contenido`);
        return reject(`Invalid user list`);
      }
    }
  });
};

const getChat = (userId) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(store.list(userId));
    } catch (err) {
      console.error(`[${err.message}] No hay lista de usuarios`);
      return reject(`Los datos no se han encontrado`);
    }
  });
};
module.exports = {
  addChat,
  getChat,
};
