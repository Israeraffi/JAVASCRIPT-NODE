function fatorial(x){
  let fat = 1
  for (i = x; i > 1; i--){
    fat *= i
  }
  return fat
}
console.log(`O fatorial é ${fatorial(5)}`)