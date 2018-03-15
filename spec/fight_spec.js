import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';
import { Fight, attackValue } from '../src/fight.js';


describe('fight', function() {
  var wizard;
  var wizard2;
  var wizard3;
  var wizard1;
  var necromancer;
  var necromancer2;
  var necromancer3;
  var necromancer1;
  var fight;
  var fight2;
  var fight3;

  beforeEach(function() {
    wizard1 = new Wizard(1, 'kitten', 50);
    wizard2 = new Wizard(2, 'tabby', 100);
    wizard3 = new Wizard(3, 'bobcat', 200);
    wizard = new Wizard(4, 'tiger', 400);
    necromancer1 = new Necromancer(1, 'puppy', 45);
    necromancer2 = new Necromancer(2, 'labradore', 90);
    necromancer3 = new Necromancer(3, 'wolf', 180);
    necromancer = new Necromancer(4, 'hell hound', 360);
    fight = new Fight(wizard, necromancer);
    fight2 = new Fight(wizard, necromancer1);
    fight3 = new Fight(wizard2, necromancer2);
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
    console.log("Your wizard skill is " + fight.wizard.skill);
    expect(fight.wizard.skill).toEqual(4);
  });

// TEST 6
  it('it levels up strength, cat and health when skill hits 5', function(){
    for (var i = 0; i < 25; i++) {
      fight.strike();
    }
    fight.levelUp();
    expect(fight.wizard.strength).toEqual(wizard.strength);
    expect(fight.wizard.cat).toEqual(wizard.cat);
    expect(fight.wizard.health).toEqual(wizard.health);
  });

// TEST 7
  it('monitors players health, alerts when either health <= 0; necromancer test', function(){
    for (var i = 0; i < 20; i++) {
      fight2.strike();
    }
    var death = fight2.death();
    console.log(death);
    expect(death).toEqual('The necromancer is dead.');
  });

// TEST 8
  it('monitors players health, alerts when either health <= 0; wizard test', function(){
    fight3.changeTurn();
    for (var i = 0; i < 90; i++) {
      fight3.strike();
    }
    var death2 = fight3.death();
    expect(death2).toEqual('The wizard is dead.')
  });

// TEST 9
  it('levels up the necromancer when called', function() {
    var necromancer = fight2.necro;
    fight2.necroLevelUp();
    expect(necromancer.strength).toEqual(2);
  });

}); // describe fight
