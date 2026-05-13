// NPM -> varias biblioteas disponiveis para importar e baixar
import chalk from "chalk";

//console.log(chalk.blue.underline.bold("Israel Melhor programador Back-end do PP"));
//console.log(chalk.bgGreen("Sucess!"))

// Toda Biblioteca no js é um Object, que se pode escolher quais propriedades vão ser importadas
import { intro, outro, text } from "@clack/prompts";



async function main() {
  intro(chalk.green("Seja Bem Vindo!"))

  const name = await text({message: "Qual seu nome?"})

  outro(`Olá ${name}!`)

}
main()

// npm install add biblioteca no package.json
// npm remove remove uma biblioteca no package.json