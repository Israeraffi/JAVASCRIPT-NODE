function sum(number, result=0 ){
  if(number <= 1){
    return result;
  }
  return sum(number - 1, number + result)
}
console.log(sum(10))