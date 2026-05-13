function main() {
  const player = {
    nickname: "Israel",
    health: 20,
    inventory: {
      items: ["sword", "shield", "bow"],
      positions: [
        { type: "regeneration", duration: 8 },
        { type: "defense", duration: 8 },
      ],
    },
  };
  // Na desestruturação se pode mudar o nome da variavel, se aquela variavel ja existir
  //const { nickname: nick, health} = player;
  //console.log(nick, health, inventory)

  //estou criando variavel das propriedades do object inventory{}
  //const {inventory: { items, positions}} = player;
  //console.log(items, positions)

  const {
    inventory: { positions },
  } = player;

  // Se pode especificar as propriedades dentro do array se nele tiver um object. Ex.: [{positions}] -> {type, duration}
  const [{ type, duration }, { type: secondType, duration: secondDuration }] = positions;

  console.log(
    `1-Position: type: ${type}, duration: ${duration}
2-Position: type: ${secondType}, duration: ${secondDuration}`,
  );
}
main();
