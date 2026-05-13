//RECURSIVIDADE
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
console.log(`O fatorial é ${fatorial(5)}`);
// setTimeout(() => oq vai acontecer, tempo em ms)

let num = (a, b) => a ** b;
//ou let num = (a, b) => { return a**b}

console.log(`O resultado é ${num(2, 2)}`);
