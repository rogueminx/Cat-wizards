import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';
import { Fight, attackValue } from '../src/fight.js';


describe('fight', function() {
  var wizard;
  var necromancer;
  var fight;
  var wizard2;
  var wizard3;
  var wizard4;

  beforeEach(function() {
    wizard = new Wizard(4, 'tiger', 400);
    necromancer = new Necromancer(4, 'hell hound', 360);
    fight = new Fight(wizard, necromancer);
    wizard2 = new Wizard(2, 'tabby', 100);
    wizard3 = new Wizard(3, 'bobcat', 200);
    wizard4 = new Wizard(4, 'tiger', 400);
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
    fight.changeTurn();
    fight.strike();
    expect(fight.wizard.health).toBeLessThan(397);
  });

// TEST 4
  it('changes the turn from true to false', function(){
    fight.changeTurn();
    expect(fight.turn).toEqual(false);
  });

// TEST 5
  it('increments wizard skill by 1 every time they strike', function(){
    for (var i = 0; i < 4; i++) {
      fight.strike();
    }
    console.log("Your wiz skill is " + fight.wizard.skill);
    expect(fight.wizard.skill).toEqual(4);
  });

// TEST 6
  it('it levels up strength, cat and health when skill hits 5', function(){
    for (var i = 0; i < 25; i++) {
      fight.strike();
    }
    fight.levelUp();
    expect(fight.wizard.strength).toEqual(wizard4.strength);
    expect(fight.wizard.cat).toEqual(wizard4.cat);
    expect(fight.wizard.health).toEqual(wizard4.health);
  });

}); // describe fight
