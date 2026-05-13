import { text } from "@clack/prompts"

// async => Significa que a função é assíncrona = precisa esperar receber um dado para executar
async function main() {

  // await => Faz o codigo esperar e recpção de dados para poder terminar de excutar.
  const name = await text({message: "Digite seu nome: "})
  const age = await text({message: `Digite sua idade ${name}: `})
  console.log(`Seja bem vindo ${name}, você tem ${age} anos!`)
  
}
main()