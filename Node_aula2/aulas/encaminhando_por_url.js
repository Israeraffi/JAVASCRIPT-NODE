const http = require("http");
const port = 3000;
const host = "127.0.0.1";

// Rotas
const servidor = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  // A / significa que é o host => 127.0.0.1
  if (request.url == "/") {
    response.write("<h1>Seja bem vindo!</h1>");
  } else if (request.url == "/suporte") {
    response.write("<h1>Ola como posso ajudar?</h1>");
  }
  if (request.url == "/central") {
    response.write("<h1>Serviços:</h1>");
  }
  response.end();
})

servidor.listen(port,host, () => {console.log('Servidor rodando!')})
