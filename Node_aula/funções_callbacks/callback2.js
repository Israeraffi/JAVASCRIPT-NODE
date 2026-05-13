function performe(exec){
  const numbers = [3, 18, 21, 44, -92, 439, -12, 22, 185, 201]
  for( const number of numbers){
    exec(number)
  }
}
performe(number => console.log(`item atual ${number}`))