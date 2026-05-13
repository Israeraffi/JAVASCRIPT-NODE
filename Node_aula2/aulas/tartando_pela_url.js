const http = require("http");
const port = 3000;
const url = require("url");
const host = "127.0.0.1";

// Rotas
const servidor = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(request.url)
  // Pega a os valores da respota da url e ttransforma em string
  const p = url.parse(request.url, true).query;
  // Pega o que tiver na url com esse nome e precisa do ?
  response.write('<br/>' + p.name)
  response.write('<br/>' + p.age)
  response.end();
});

servidor.listen(port, host, () => {
  console.log("Servidor rodando!");
});
