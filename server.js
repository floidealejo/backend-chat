const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./components/message/network/network");
const router = require("./network/routes");
const db = require("./db");
let app = express();
app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
db();

// app.use(router);
router(app);

app.use("/", express.static("public"));
console.log(`La aplicacion esta escuchando en el puerto 3000`);

process.exit;
