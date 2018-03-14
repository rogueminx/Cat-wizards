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
      this.wizard.skill += 1;
      return this.necro.health;
    } else {
      this.wizard.health -= necroAttack;
      return this.wizard.health;
    }
  } // strike

  changeTurn() {
    var status = this.turn;
    if (status === true) {
      this.turn = false;
    } else {
      this.turn = true;
    }
  } // changeTurn

  levelUp() {
    var skill = this.wizard.skill;
    if (skill > 4 && skill < 10) {
      this.wizard.strength = 2;
      this.wizard.cat = 'tabby';
      this.wizard.health = 100;
    } else if (skill > 9 && skill < 20) {
      this.wizard.strength = 3;
      this.wizard.cat = 'bobcat';
      this.wizard.health = 200;
    } else if (skill > 19) {
      this.wizard.strength = 4;
      this.wizard.cat = 'tiger';
      this.wizard.health = 400;
    } else {
      this.wizard.strength = 1;
      this.wizard.cat = 'kitten';
      this.wizard.health = 50;
    }
  } // levelUp

} //Fight
