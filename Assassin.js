class Assassin extends Character {
  constructor(name= "Carl", hp = 6, dmg = 6, mana = 20) {
    super(name, hp, dmg, mana);
  }

  // L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour.
  // Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort,
  // l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.

}
