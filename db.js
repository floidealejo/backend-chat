const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `.env` });

mongoose.Promise = global.Promise;
const conexion = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

console.log(`[db] conectada con exito`);
module.exports = conexion;
