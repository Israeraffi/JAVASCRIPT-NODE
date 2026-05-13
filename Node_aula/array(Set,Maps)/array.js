// Set não deixa repetir dados e ele cria um "array"
const numbers = new Set([1, 2, 4 ,7, 5, 8, 9, 0])
const numberss = new Set([3, 6, 4, 2, 9, 7])

// add o item ao fim da lista
numbers.add(7)
// remove o item que está no ()
numbers.delete(7)
// retorna True ou False se o item estiver na lista ()
numbers.has(3)
// apaga todos os item do Set
numbers.clear() 
// retorna quantos itens têm dentro do Set
numbers.size
// retorna item por item, ele "percorre" o Set
numbers.values() 
// recebe uma callback, e faz como se fosse um laço for, ocorre algo para cada item do Set
numberss.forEach((number) => {
  console.log(number)
})

console.log(numbers)