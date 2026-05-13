/*
function pegarDados(id){
  //A Promise é a Promessa que ira retorna algo de acordo com o que foi pedido(se tudo der certo = resolve, se der errado = reject)
  return new Promise((resolve, reject) => {
    //O que vai acontecer:
    if(id <= 10){
      return resolve({id: id, name: `user ${id}`})
    }
    return reject("Não existe esses usuarios!")
  })
}

async function executar(id){

  const dados = await pegarDados(id)
  console.log(dados)
}
executar(30)
*/

