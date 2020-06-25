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

const getMessages = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(store.list());
    } catch (err) {
      console.error(`[${err.message}] No hay lista de mensajes`);
      return reject(`Los datos no se han encontrado`);
    }
  });
};

module.exports = {
  addMessage,
  getMessages,
};
