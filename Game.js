class Game {
  constructor(turnLeft = 10, characters = new Array) {
    this.turnLeft = turnLeft;
    this.characters = characters;
  }

  initCharacters = () => {
    let grace = new Fighter();
    let ulder = new Paladin();
    let moana = new Monk();
    let draven = new Berzerker();
    let carl = new Assassin();
  
    this.characters.push(grace, ulder, moana, draven, carl);
  }

  randomIndex = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  skipTurn = () => {
    this.turnLeft -= 1;
  }

  startTurn = () => {
    console.log(`C'est le tour n°${11 - this.turnLeft}`);
    let charactersIndex = [0, 1, 2, 3, 4];
    while (charactersIndex.length > 0) {
      let playerIndex = this.randomIndex(charactersIndex);
      console.log(`${this.characters[playerIndex].name} joue son tour... "C'est parti les p'tits potes, on fou l'bordel !"...`);
      charactersIndex = charactersIndex.filter(characterIndex => characterIndex !== playerIndex);
    }
    this.skipTurn();
  }

  endGame = () => {
    // Fin du jeu, mettre les joueurs aux status "winner"
    console.log("Le jeu est fini.");
  }
}
