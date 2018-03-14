import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';
import { Fight } from '../src/fight.js';

describe('Wizard', function() {

  var wizard1;
  var wizard2;
  var wizard3;
  var wizard4;
  var necro1;
  var necro2;
  var necro3;
  var necro4;
  var fight;

  beforeEach(function() {
    wizard1 = new Wizard(1, 'kitten', 50);
    wizard2 = new Wizard(2, 'tabby', 100);
    wizard3 = new Wizard(3, 'bobcat', 200);
    wizard4 = new Wizard(4, 'tiger', 400);
    necro1 = new Necromancer(1, 'puppy', 45);
    necro2 = new Necromancer(2, 'labradore', 90);
    necro3 = new Necromancer(3, 'wolf', 180);
    necro4 = new Necromancer(4, 'hell hound', 360);
    fight = new Fight(wizard3, necro3);
  });

  it('shows how beforeEach works', function() {
    console.log(wizard1);
  });

  it('creates a wizard and necromancer strength = 1, cat = kitten/ dog = hell hound, health = 50/ 360', function() {
    expect(wizard1.strength).toEqual(1);
    expect(wizard1.cat).toEqual('kitten');
    expect(wizard1.health).toEqual(50);
    expect(necro4.strength).toEqual(4);
    expect(necro4.dog).toEqual('hell hound');
    expect(necro4.health).toEqual(360);
  });

}); // wizard
