export class Wizard {
  constructor(strength, cat, health) {
    this.strength = strength;
    this.cat = cat;
    this.health = health;
    this.attackcounter = 0;
  }

  attackValue() {
    var attackVal = Math.floor(Math.random()*6)+1;
    if (this.strength === 1) {
      return attackVal;
    } else if (this.strength === 2) {
      return (attackVal * 2);
    } else if (this.strength === 3) {
      return (attackVal * 3);
    } else {
      return (attackVal * 4);

    }
  } // attack

}; // Wizard
