let valor = document.querySelector("#inp1");
let lista = document.querySelector("#lista");
let result = document.querySelector('#result')
let vetor = [];

function Enumero(n) {
  if (n != "" && n >= 1 && n <= 100) {
    return true;
  } else if (n < 1 || n > 100 || n == "") {
    return false;
  }
}

function jafoi(n) {
  if (vetor.indexOf(n) == -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  let numero = Number(valor.value);
  if (Enumero(numero) == true && jafoi(numero) == true) {
    vetor.push(numero);
    item = document.createElement("option");
    item.text = `Valor adicionado à lista ${numero}`;
    lista.appendChild(item);
    valor.value = "";
    valor.focus();
  }else if(Enumero(numero) == false || jafoi(numero) == false){
    alert(`Digite um número valido ou que ainda não foi adicionado!!!`)
  }
}

function finalizar(){
  vetor.sort()
  if(vetor != ""){
    result.innerHTML += `A quantidade de itens adicionados é de ${vetor.length}<br>`
    result.innerHTML += `O maior número foi ${vetor[vetor.length - 1]}<br>`
    result.innerHTML += `O menor número foi ${vetor[0]}<br>`
    let soma = 0
    for(i = 0; i < vetor.length; i ++){
      soma += vetor[i]
    }
    let media = soma / vetor.length
    result.innerHTML += `A soma dos números é de ${soma}<br>`
    result.innerHTML += `A média é de ${media.toFixed(1)}`
  }else{
    alert(`Adicione algum item!!`)
  }
}
