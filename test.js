mygame = new Game;
mygame.initCharacters();
console.log('Tapez "mygame.start()" pour démarrer le jeu');


////////////////
// EXEMPLES : //
////////////////

// Grace prends 20 dégâts (et meurt):
// mygame.characters[0].takeDamage(20);

// Draven inflige 5 dégâts à Carl :
// mygame.characters[3].dealDamage(mygame.characters[4], 5);
// Une deuxième fois et Carl meurt.