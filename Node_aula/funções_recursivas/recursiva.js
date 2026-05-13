function countdowm(number){
  if(number < 1) return;
  setTimeout(() => {
    console.log(number)
    countdowm(number - 1)
  }, 1000)
}

countdowm(10)