class Personagem {
  constructor(vida) {
    this.vida = vida
  }
  atacar() {
    console.log('Atacando')
  }
  defender() {
    console.log('Defendendo')
  }
}
module.exports = Personagem 