//require() =>  FUNÇÃO USADA PARA  IMPORTAR MODULOS NO NODE.JS

// A variavel está recebendo esse modulo com seu valor
const rl = require("node:readline");
const { isDataView } = require("node:util/types");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*prompt.question("Pergun`Ésa o valor digitado
});*/

/*
Assíncrono significa:
👉 o código não executa tudo na hora e em ordem direta.
Ele pode esperar algo acontecer em segundo plano e continuar o resto do programa.
*/

/*
Callback é uma função que é passada como argumento para outra função, e será executada depois (em algum momento).
*/
prompt.question("Digite sua idade: ", (idade) => {
  idade = Number.parseInt(idade);

  if (isNaN(idade)) {
    console.log(`Idade Invalida!`);
  } else if (idade >= 55) {
    console.log(`Você é um Idoso!`);
  } else if (idade >= 18 && idade < 55) {
    console.log(`Você é Maior de Idade!`);
  } else if (idade >= 12 && idade <= 17) {
    console.log(`Você é um Adolescente!`);
  } else if (idade >= 1 && idade <= 11) {
    console.log(`Você é uma Criança!`);
  } else {
    console.log(`ERRO!`);
  }
  prompt.close();
});

// JSON.stringify(object) => Permite ver todas as proprieades do Object
