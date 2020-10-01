class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage = (hit) => {
    this.hp = this.hp - hit;
    console.log(`Les dégâts reçus sont de ${hit} points de vie`);
    console.log(`${this.hp} points de vie restants`);
  }

  dealDamage = (victim) => {
    // Donner dmg à victim
  }
}
