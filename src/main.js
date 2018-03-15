import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wizard } from './wizard.js';
import { Necromancer } from './necromancer.js';
import { Fight } from './fight.js';

$(document).ready(function() {
  var fight;
  var wizard;
  var necro;
  wizard = new Wizard(1, 'kitten', 50);
  necro = new Necromancer(1, 'puppy', 45);
  fight = new Fight(wizard, necro);

  $('#play').click(function(){
    var skill = fight.wizard.skill;
    fight.strike();
    fight.changeTurn();
    fight.death();
    console.log("This is the wizard skill " + skill);

    // level up
    if (skill === 5) {
      fight.levelUp();
    } else if (skill === 10) {
      fight.levelUp();
    } else if (skill === 20) {
      fight.levelUp();
    } else {
      console.log("Your leveling up is being ignored.")
    }

    $('#necrostrength').text(fight.necro.strength);
    $('#necrodog').text(fight.necro.dog);
    $('#necrohealth').text(fight.necro.health);
    $('#wizardstrength').text(fight.wizard.strength);
    $('#wizardcat').text(fight.wizard.cat);
    $('#wizardhealth').text(fight.wizard.health);

    console.log(fight.wizard.skill);
  });
});
