let num = [1, 2, 0, 7, 'ola']
num.push(' olaa')
//num.length -> contar quantos elementos tem
//num.sort() -> organizar na ordem crescente
/*
console.log(`Os valores armazenados em num é: ${num}`)
console.log(`Os valores armazenados em num é: ${num.length - 1}`)
console.log(`Os valores armazenados em num é: ${num[3]}`)
console.log(`Os valores armazenados em num é: ${num.sort()}`)
*/
for (i = 0; i <= (num.length - 1); i++){
  console.log(`Aposição ${i} tem valor de -> ${num[i]}`)
}