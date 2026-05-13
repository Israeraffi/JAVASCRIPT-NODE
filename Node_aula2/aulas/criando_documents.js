const http = require("http");
// fs é abreviação de "File System" é o módulo nativo do Node.js que permite ao seu código "mexer" nos arquivos do seu computador ou servidor.
const fs = require("fs");
const port = 3000;

const server = http.createServer((request, response) => {
  // cria um arquivo
  fs.appendFile('result.txt', 'Seja bem vindo, deu tudo certo!', (err) => {
    // se tiver erro
    if (err){
      throw err
    }
    // se ocorrer tudo certo
    console.log('Arquivo criado com sucesso!')
  });
});

server.listen(port, () => {
  console.log("Server run!");
});

/*
fs.readFile => Ler o arquivo,
fs.appendFile => Cria um arquivo,
fs.writeFile => Escreve no arquivo,
fs.unlink => deletar arquivo.
*/
