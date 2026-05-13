let idade = 66
console.log(`Você tem ${idade} anos`)
if(idade >= 18 && idade <= 66){
  console.log(`Vota!`)
}else{
  if(idade < 18 && idade >= 16 || idade >= 67){
    console.log(`Voto opcional!`)
  }else{
    console.log(`Não vota!`)
  }
}