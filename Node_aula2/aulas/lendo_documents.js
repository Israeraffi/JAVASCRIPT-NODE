const http = require("http");
// fs é abreviação de "File System" é o módulo nativo do Node.js que permite ao seu código "mexer" nos arquivos do seu computador ou servidor.
const fs = require("fs");
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  // ler o arquivo e recebe dois parametros para tratar
  fs.readFile("index.html", (err, file) => {
    // se não tiver erro
    if (err == null || err == undefined) {
      response.write(file);
    } 
    // se tiver algun erro
    else {
      response.write("ERROR!" + err);
    }
    return response.end();
  });
});

server.listen(port, () => {
  console.log("Server run!");
});
