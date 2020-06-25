exports.success = (request, respo, message, status) => {
  respo.send({ error: "", body: message }, status || 200);
};

exports.error = (request, respo, message, status, details) => {
  console.error(`[response error] ${details}`);

  respo.send({ error: message, body: "" }, status || 500);
};
