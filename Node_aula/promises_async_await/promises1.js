function requestCar(drivers) {
  return new Promise((resolve, reject) => {
    if (drivers > 0) {
      return resolve("Seu motorista esta a caminho!");
    }
    return reject("Não há motoristas dísponiveis no momento!");
  });
}

/*
function main(){
  let drivers = 0
  const request = requestCar(drivers)

  // .then acontece quando a promessa for resolvida com sucesso!
  request
  .then((text) => {
    console.log(`Promessa concluída! ${text}`)
  })
  .catch((err) => {
    console.log(`Promessa rejeitada`)
  })
  .finally(() => {
    console.log("Fim da Promessa!")
  })
}
*/

async function main() {
  let drivers = 2;
  const request = await requestCar(drivers).catch(() => null);

  if(!request){
    console.log("Erro")
    return
  }
  console.log(`Resultado: ${request}`)
}
main();
