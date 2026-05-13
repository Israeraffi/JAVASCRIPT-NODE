// "" '' ``

const result = 8 + 2;
// Transforma o resultado em String:
const text = `Seu resultado é ${result}`

// A String é como se fosse um array de caracteres.
const myName = "Israel "
console.log(myName[3])
console.log(myName.length)

// Retorna: true or false, e é usado para verificar se tem aquele caractere na String
console.log(myName.includes("I")) 

// Verifca se a String começa com aquele caractere, tambem restorna: true or false
console.log(myName.startsWith("I"))

// Verifca se a String termina com aquele caractere, tambem restorna: true or false
console.log(myName.endsWith("l"))

// Corta a String a partir dos parametros, o ultimo indice ele corta 
console.log(myName.slice(0, 4)) 

// Repete mo terminal quantas vezes for pedido
console.log(myName.repeat(3))

// Transforma a Stinrg em array, se deixar ("") separa letra por letra, mas ele separa pelo que for pedido no ()
const stringArray = myName.split(" ")
console.log(stringArray)

// Junta o array e transfoma em uma String, separando pelo o que for pedido.
console.log(stringArray.join(""))

