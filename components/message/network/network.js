const express = require("express");
const multer = require("multer");
const responses = require("../../../network/response");
const controller = require("../controller/controller");
const router = express();

const upload = multer({ dest: "public/files/" });

router.get("/", (request, response) => {
  const filterMessages = request.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      responses.success(request, response, messageList, 200);
    })
    .catch((err) => {
      responses.error(request, response, "Unexpected Error", 500, err.message);
    });
});

router.post("/", upload.single("file"), (request, response) => {
  controller
    .addMessage(
      request.body.chat,
      request.body.user,
      request.body.content,
      request.file
    )
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
