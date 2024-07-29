const Personagem = require("./personagem");

class Heroi extends Personagem {
  moedas = 0
  constructor(vida, nome, fome, forca) {
    super(vida)
    this.forca = forca
    this.nome = nome
    this.fome = fome
  }
}
module.exports = Heroi