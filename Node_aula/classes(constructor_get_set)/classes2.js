class Person{
  // O # faz com que a propiedade seja privada, e não possa ser alterada 
  #name;
  #age;
  #money = 0;
  constructor(name, age){
    this.#name = name;
    this.#age = age;

  }
  intro(){
    return `Seu nome é ${this.#name} e você tem ${this.#age} anos`
  }

  // Não posssibilita mudar o valor da propriedade, somente retornam as propriedades
  getName(){
    return this.#name
  }
  setName(value){
    this.#name = value
  }
  getAge(){
    return this.#age
  }
  getMoney(){
    return `\nSeu saldo é de ${this.#money}`
  }
  // set Deixa alterar o valor fora da Class
  setMoney(value){
    this.#money = value
  }
  incrementtMoney(value){
    this.setMoney(this.#money + value)
  }
}

const person = new Person("Israel", 18)
person.setMoney(1500)
 
console.log(person.intro(), person.getMoney())