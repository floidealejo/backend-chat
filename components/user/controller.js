const store = require("./store");
const addUser = (name) => {
  const User = {
    name,
    date: new Date(),
  };
  return new Promise((resolve, reject) => {
    try {
      store.add(User);
      return resolve(User);
    } catch (err) {
      if (!name) {
        console.error(`[${err.message}] Ingreso del nombre de usuario mal`);
        return reject(`Los datos suministrados son incorrectos`);
      }
    }
  });
};

const getUsers = (filterUser) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(store.list(filterUser));
    } catch (err) {
      console.error(`[${err.message}] No hay lista de Usuarios`);
      return reject(`No se ha encontrado un usuario`);
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
  addUser,
  getUsers,
  updateMessage,
  deleteMessage,
};
