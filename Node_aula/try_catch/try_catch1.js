import { readFile } from "node:fs/promises"

async function main() {
  
  let file;
  try{
    file = await readFile("./try_catch/try_catch1.js")
    console.log(file.toString())
  }catch(error){
    console.log("Não foi possível ler o arquivo!")
  }finally{
    console.log("Fim do tratamento de erro!")
  }
  
  console.log("Fim do programa!")
  
}
main()