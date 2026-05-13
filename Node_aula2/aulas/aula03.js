const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
  // statusCode => (código de status HTTP) o número
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('Israel')
});

server.listen(port, () => {console.log('Server run!')});
