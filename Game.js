class Game {
  constructor(turnLeft = 10, characters = new Array) {
    this.turnleft = turnLeft;
    this.characters = characters;
  }

  skipTurn = () => {
    // Retirer un tour
  }

  startTurn = () => {
    // console.log(`It's turn ${currentTurn}`)
  }

  initCharacters = () => {
  let grace = new Fighter();
  let ulder = new Paladin();
  let moana = new Monk();
  let draven = new Berzerker();
  let carl = new Assassin();

  this.characters.push(grace, ulder, moana, draven, carl);
  }
}