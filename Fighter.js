class Fighter extends Character {
  constructor(name= "Grace", hp = 12, dmg = 4, mana = 40) {
    super(name, hp, dmg, mana);
  }

  // Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts.
  // Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu.
  // Elle coute 20 mana.

  specialAttack = () => {
    console.log("Attaque spéciale : Dark Vision !");
  }
}
