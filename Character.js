class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  showState = () => {
    if (this.hp > 0) {
      console.log(`${this.name} a ${this.hp} points de vie`)
    }
    else {
      console.log(`${this.name} est hors jeu !`)
    }
  }

  takeDamage = (damageReceived) => {
    this.hp = this.hp - damageReceived;
    console.log(`Les dégâts reçus sont de ${damageReceived} points de vie`);
    if (this.hp <= 0) {
      this.status = "loser";
      console.log("Le jouer a été tué");
    }
    else {
      console.log(`${this.hp} points de vie restants`);
    }
  }

  dealDamage = (victim, damage) => {
    if (victim.hp > 0) {
      victim.takeDamage(damage);
    }
    else {
      console.log(`${victim.name} n'est plus dans la partie !`)
    }
  }
}
