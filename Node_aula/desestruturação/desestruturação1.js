function main(){
  const person = {
    name: "Israel",
    age: 22,
    isProgammer: true
  }
  //para poder pegar o valor  da propriedade a variavel precisa ter o mesmo nome
  const { name, age, isProgammer } = person

  console.log(name, age, isProgammer)

}
main()

