function getRandom(){
  return new Promise((resolve) => 
    setTimeout(() => resolve((Math.random()*10).toFixed(2)), 2000))
}

async function main() {
  console.log("Inicio do Programa!")
  const value = await getRandom()
  console.log(value)
   console.log("Fim do Programa!")
}
main()