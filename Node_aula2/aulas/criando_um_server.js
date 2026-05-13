// HTTP.cat
const http = require("http");
// Criação d server
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plais" });
    response.write("Hello, Word!");
    response.end();
  })
  .listen(1337);

// LOCALHOST => 127.0.0.1