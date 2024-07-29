const Personagem = require("./personagem")


class Vilao extends Personagem {
  constructor(vida, forcaAtaEsp) {
    super(vida)
    this.forcaAtaqueEsp = forcaAtaEsp
  }
  ataqueEsp() {
    console.log(this.forcaAtaqueEsp)
  }
}
module.exports = Vilao