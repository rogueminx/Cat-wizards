import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';

export function attackValue(strength) {
  var attackVal = Math.floor(Math.random()*6)+1;
  if (strength === 1) {
    return attackVal;
  } else if (strength === 2) {
    return (attackVal * 2);
  } else if (strength === 3) {
    return (attackVal * 3);
  } else {
    return (attackVal * 4);
  }
} // attack

export class Fight {
  constructor(wizard, necro) {
    this.wizard = wizard;
    this.necro = necro;
    this.turn = true;
  }


  strike() {
    var wizardAttack = attackValue(this.wizard.strength);
    var necroAttack = attackValue(this.necro.strength);
    if (this.turn === true) {
      this.necro.health -= wizardAttack;
      return this.necro.health;
    } else {
      this.wizard.health -= necroAttack;
      return this.wizard.health;
    }
  } // strike

} //Fight
