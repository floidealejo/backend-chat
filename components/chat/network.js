const express = require("express");
const responses = require("../../network/response");
const controller = require("./controller");
const router = express();

router.get("/:userId", (request, response) => {
  controller
    .getChat(request.params.userId)
    .then((users) => {
      responses.success(request, response, users, 200);
    })
    .catch((err) => {
      responses.error(request, response, "Unexpected Error", 500, err.message);
    });
});

router.post("/", (request, response) => {
  controller
    .addChat(request.body.users)
    .then((data) => {
      responses.success(request, response, data, 201);
    })
    .catch((e) => {
      responses.error(request, response, "Internal error", 500, e.message);
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
