function parimp(n){
  let result = n % 2
  if(result == 0){
    return `O número ${n} é par`
  }else{
    return `O número ${n} é ímpar` 
  }
}
console.log(parimp(5))