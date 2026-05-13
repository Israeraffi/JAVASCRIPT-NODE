const computer = {
  motherboard: "B360M",
  videoCard: "RTX 2070",
  cpu: "Intel i7 8700",
  font: {
    name: "XPG Core Reactor",
    watts: 800,
  },
  case: {
    name: "Draco GameMax",
    color: "black",
  },
  ram: [
    {
      name: "HyperX",
      size: 1600,
    },
    {
      name: "HyperX",
      size: 8000,
    },
  ],
};

//console.log(computer.font.watts)
//console.log(computer.ram.pop())
//console.log(computer.ram.push(3))
console.log("-------------INFORMÇÕES DO COMPUTADOR-------------")
console.log(`Placa mãe: ${computer.motherboard}`)
console.log(`Placa de vídeo: ${computer.videoCard}`)
console.log(`Processador: ${computer.cpu}`)
console.log(`Fonte: ${computer.font.name, computer.font.name}`)
console.log(`Gabinete: ${computer.case.name} Cor: ${computer.case.color}`)
console.log(`Memória: `)
for ( const ram of computer.ram){
  console.log(`${ram.name} ${ram.size} MBs`)
}
