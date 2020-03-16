var request = require("request");

request.post(
  {
    headers: { "content-type": "application/json" },
    url: "http://localhost:28102",
    body:
      'mjml={ "mjml": "<mjml><mj-body><mj-container><mj-section><mj-column><mj-text>Hello World!</mj-text></mj-column></mj-section></mj-container></mj-body></mjml>" }'
  },
  function(error, response, body) {
    console.log(body);
    console.error(error);
  }
);
