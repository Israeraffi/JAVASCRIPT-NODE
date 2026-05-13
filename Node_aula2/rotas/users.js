const express = require("express");
const caminhos = express.Router();

const Users = [
  { user: "Israel", status: "Ativo", período: 2 },
  { user: "Danilo", status: "Ativo", período: 6 },
  { user: "Yuri", status: "Trancado", período: 3 },
  { user: "Eduardo", status: "Ativo", período: 8 },
  { user: "Bryan", status: "Trancado", período: 5 },
];

caminhos.get("/", (req, res) => {
  res.send("Olá, seja bem vindo a meu sistema!");
});

// Usado /user/:user => para que quando tiver localhost:3000/user/nome o script vá direto para o arquivo user, que foi importado
caminhos.get("/user/:user", (req, res) => {
  const user = req.params.user;
  const userI = Users.find((u) => u.user == user);
  if (!userI) {
    res.status(404).send("Usuário nâo encontrado!");
  } else {
    res.status(200).json(userI);
  }
});

module.exports = caminhos;
