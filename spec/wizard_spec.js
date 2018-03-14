import { Wizard } from '../src/wizard.js';

describe('Wizard', function() {

  var wizard;

  beforeEach(function() {
    wizard = new Wizard(1, 'kitten', 50);
  });

  it('shows how beforeEach works', function() {
    console.log(wizard);
  });

  it('creates a wizard strength = 1, cat = kitten, health = 50', function() {
    expect(wizard.strength).toEqual(1);
    expect(wizard.cat).toEqual('kitten');
    expect(wizard.health).toEqual(50);
  });

}); // wizard
