const express = require("express");
const app = express()
const port = 3000;

// com o et eu passo a porta e dps a função callback, ele é usado como o if
app.get('/', (request, response) => {
  response.send('Israel')
})

app.get('/suporte', (request, response) => {
  response.json({suporte: {número: 983833222, whats: 382922829}})
} )

app.listen(port, () => {
  console.log("Server run!");
});
