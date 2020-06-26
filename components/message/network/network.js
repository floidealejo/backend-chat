const express = require("express");
const responses = require("../../../network/response");
const controller = require("../controller/controller");
const router = express();

router.get("/", (request, response) => {
  const filterMessages = request.query.user || null;
  controller
    .getMessages(filterMessages)
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

router.patch("/:id", (request, response) => {
  controller
    .updateMessage(request.params.id, request.body.content)
    .then((data) => {
      responses.success(request, response, data, 200);
    })
    .catch((e) => {
      responses.error(request, response, "Error interno", 500, e.message);
    });
});

router.delete("/:id", (request, response) => {
  controller
    .deleteMessage(request.params.id)
    .then(() => {
      responses.success(
        request,
        response,
        `Usuario ${request.params.id} eliminado`,
        200
      );
    })
    .catch((e) => {
      responses.error(request, response, "Error interno", 500, e.message);
    });
});
module.exports = router;
