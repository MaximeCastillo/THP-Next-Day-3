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
      if (this.characters[playerIndex].status == "playing") {
        console.log(`C'est à ${this.characters[playerIndex].name} de jouer`);
        let attackType = this.askAttackType();
        if (attackType == "n") {
          console.log("Attaque normale");
        }
        else if (attackType == "s") {
          console.log("Attaque spéciale");
       }
        else {
          console.log("Mauvaise réponse");
        }
      }
      charactersIndex = charactersIndex.filter(characterIndex => characterIndex !== playerIndex);
    }
  }

  start = () => {
    console.log(this.characters);
    let playingCharacters = this.characters.filter(character => character.status == "playing");
    while (this.turnLeft > 0 && playingCharacters.length > 1) {
      this.startTurn();
      let playingCharacters = this.characters.filter(character => character.status == "playing");
      console.log(`Les personnages encore en vie sont :`)
      playingCharacters.forEach(character => console.log(`${character.name} avec ${character.hp} points de vie`));
      this.skipTurn();
    }
    this.endGame();
  }

  askAttackType = () => {
    return prompt('Attaque normale (tapez "n") OU attaque spéciale (tapez "s") ?');
  }

  endGame = () => {
    // Fin du jeu, mettre les joueurs aux status "winner"
    // this.characters = this.characters.map(character => {
    //   if (character.status == "playing") {
    //     character.status = "winner";
    //   }
    // });
    // let winners = this.characters.filter(character => character.status == "winner");
    console.log(`Bravo aux gagnants : ...`)
    //winners.forEach(character => console.log(`${character.name} avec ${character.hp} points de vie`));
    console.log("Le jeu est fini.");
  }

  watchStats = () => {
    // Afficher les personnages vivants ainsi que leurs caractéristiques.
  }
}
