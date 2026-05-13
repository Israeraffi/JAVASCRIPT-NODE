/* No object se tem as propriedade que são os valores dentro deles, tambem temos os metodos que são as ações */

// this serve para dizer que é uma propriedade do object atual, e tambem para seleci
const player = {
  nickname: "Israel",
  //vida
  health: 20,
  //está morto
  isDead: false,
  //metodo
  present() {
    console.log(`Meu nick é ${this.nickname}`);
  },
};

/*player.present()
console.log(player["nickname"])
*/
for (var prop in player) {
  console.log(prop);
}
