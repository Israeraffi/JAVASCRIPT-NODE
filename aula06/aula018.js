let num = [8, 0, 3, 5, 2];
// Só se usa para Objetos e vetores
num.sort();
for (i in num) {
  console.log(`O item de indíce ${i} tem o valor de ${num[i]}`);
}

//num.indexOf(8) -> Retorna o indíce onde está esse valor do parentes
//num.indexOf(1) = -1 -> Se não tiver o valor no vetor ele retorna -1
let indice_valor = num.indexOf(1);
if (indice_valor == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está no indíce: ${indice_valor}`);
}
