const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("hello node");
});

const port = 3000;

server.listen(port, function () {
  console.log("the server is listening at port", port);
});
