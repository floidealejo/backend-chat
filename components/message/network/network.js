const express = require("express");
const responses = require("../../../network/response");
const controller = require("../controller/controller");
const router = express();

router.get("/", (request, response) => {
  controller
    .getMessages()
    .then((messageList) => {
      responses.success(request, response, messageList, 200);
    })
    .catch((err) => {
      responses.error(request, response, "Unexpected Error", 500, err.message);
    });
});

router.post("/", (request, response) => {
  controller
    .addMessage(request.body.user, request.body.content)
    .then((fullMessage) => {
      responses.success(request, response, fullMessage, 200);
    })
    .catch((e) => {
      responses.error(
        request,
        response,
        "Informacion invalida",
        400,
        "Error en el controlador"
      );
    });
});

module.exports = router;
