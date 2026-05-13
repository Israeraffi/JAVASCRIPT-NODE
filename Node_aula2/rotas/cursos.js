const express = require("express");
const rotas = express.Router();

let cursosInfor = [
  {
    curso: "node",
    infor: "Curso de Node",
  },
  {
    curso: "react",
    infor: "Curso de React",
  },
  {
    curso: "java",
    infor: "Curso de Java",
  },
  {
    curso: "arduino",
    infor: "Curso de Arduino",
  },
];

rotas.get("/", (request, response) => {
  response.json({ ola: "seja bem vindo!" });
});

rotas.get("/course/:curso", (request, response) => {
  const curso = request.params.curso;
  const cursoI = cursosInfor.find(i => i.curso == curso);
  if (!cursoI) {
    response.status(404).json({ erro: "Curso não encontrado!" });
  } else {
    response.status(200).json(cursoI);
  }
});

module.exports = rotas;
