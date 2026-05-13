class Person{
  // O # faz com que a propiedade seja privada, e não possa ser alterada 
  #name;
  #age;
  constructor(name, age){
    this.#name = name;
    this.#age = age;

  }
  intro(){
    return `Meu nome é ${this.#name} e tenho ${this.#age} anos`
  }
}

const person = new Person("Israel", 18)
console.log(person.intro())

//const person = {
//  #name: "Israel",
//  #age: 18,
//  intro(){
//    return `Eu me chamo ${this.#name}`
//  }
//}
//console.log(person.intro())
//console.log(person.#name)