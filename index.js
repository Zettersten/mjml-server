const fastify = require("fastify")();
const mjml = require("mjml");

fastify.post("/", function(request, reply) {
    
  if (typeof request.body.mjml === "undefined" || request.body.mjml === null) {
    reply.send({});
    return;
  }

  let result = mjml(request.body.mjml);

  if (Object.keys(result.errors).length) {
    Object.keys(result.errors).forEach(key => {
      delete result.errors[key].formattedMessage;
    });
  }

  reply.send(result);
});

// Run the server!
fastify.listen(
  process.env.PORT || 3000,
  process.env.HOST || "127.0.0.1",
  function(err) {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
  }
);
