import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';
import { Fight, attackValue } from '../src/fight.js';


describe('fight', function() {
  var wizard;
  var necromancer;
  var fight;

  beforeEach(function() {
    wizard = new Wizard(4, 'tiger', 400);
    necromancer = new Necromancer(4, 'hell hound', 360);
    fight = new Fight(wizard, necromancer);
  });

// TEST 1
  it('creates a new instance of the fight class', function() {
    expect(fight.wizard.strength).toEqual(4);
    expect(fight.necro.dog).toEqual('hell hound');
  });

// TEST 2
  it('returns an attack value', function() {
    var attackVal = attackValue(wizard.strength);
    expect(attackVal.toString()).toMatch(/[4-9]|[1][0-9]|[2][0-4]/);
  });

// TEST 3
  it('allows attacker to strike defender and decrease defender health points', function(){
    fight.strike();
    expect(fight.necro.health).toBeLessThan(357);
  });

}); // describe fight
