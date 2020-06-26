const store = require("../store/store");
const addMessage = (user, content) => {
  const fullMessage = {
    user: user,
    content: content,
    date: new Date(),
  };
  return new Promise((resolve, reject) => {
    try {
      store.add(fullMessage);
      return resolve(fullMessage);
    } catch (err) {
      if (!user || !content) {
        console.error(`[${err.message}] No hay usuario o contenido`);
        return reject(`Los datos son incorrectos`);
      }
    }
  });
};

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(store.list(filterUser));
    } catch (err) {
      console.error(`[${err.message}] No hay lista de mensajes`);
      return reject(`Los datos no se han encontrado`);
    }
  });
};

const updateMessage = (id, content) => {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    try {
      const result = await store.updateText(id, content);
      console.log(result);
      return resolve(result);
    } catch (err) {
      if (!id || !content) {
        console.error(`[${err.message}] No hay id o contenido`);
        return reject(`Los datos son incorrectos`);
      }
    }
  });
};
const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    try {
      const result = await store.delete(id);
      console.log(result);
      return resolve(result);
    } catch (err) {
      if (!id) {
        console.error(`[${err.message}] Data not found`);
        reject(`the data is not found`);
        return false;
      }
    }
  });
};
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
