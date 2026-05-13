import { text } from "express";

function upper(text) {
  if (typeof text !== "string") {
    throw new Error("O parametro inserido não é uma string");
  }
}

try {
  console.log(upper(20))
} catch (error) {
  console.log("Parametro Invalido!", error);
} finally {
  console.log("Fim do programa!");
}



//async function main(text) {
//  let texto;
//  try{
//    texto = upper(text)
//    console.log(texto.toUpperCase())
//  }catch(error){
//    console.log("Digite uma palavra ou frase!")
//  }finally{
//    console.log("Fim do Programa!")
//  }
//}
//main("Israel")
