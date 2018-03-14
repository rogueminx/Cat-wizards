import { Wizard } from '../src/wizard.js';
import { Necromancer } from '../src/necromancer.js';

describe('Wizard', function() {

  var wizard1;
  var wizard2;
  var wizard3;
  var wizard4;
  var necro1;
  var necro2;
  var necro3;
  var necro4;

  beforeEach(function() {
    wizard1 = new Wizard(1, 'kitten', 50);
    wizard2 = new Wizard(2, 'tabby', 100);
    wizard3 = new Wizard(3, 'bobcat', 200);
    wizard4 = new Wizard(4, 'tiger', 400);
    necro1 = new Necromancer(1, 'puppy', 45);
    necro2 = new Necromancer(2, 'labradore', 90);
    necro3 = new Necromancer(3, 'wolf', 180);
    necro4 = new Necromancer(4, 'hell hound', 360);
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

  it('attackValue level one returns a random number between 1 and 6', function() {
    var attackVal1 = wizard1.attackValue(wizard1.strength);
    var attackVal2 = wizard2.attackValue(wizard2.strength);
    var attackVal3 = wizard3.attackValue(wizard3.strength);
    var attackVal4 = wizard4.attackValue(wizard4.strength);
    expect(attackVal1.toString()).toMatch(/[1-6]/);
    expect(attackVal2.toString()).toMatch(/[2-9]|[1][0-2]/);
    expect(attackVal3.toString()).toMatch(/[3-9]|[1][0-8]/);
    expect(attackVal4.toString()).toMatch(/[4-9]|[1][0-9]|[2][0-4]/);
  });




}); // wizard
