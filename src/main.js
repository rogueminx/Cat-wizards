import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wizard } from './wizard.js';
import { Necromancer } from './necromancer.js';
import { Fight } from './fight.js';
import Picture from './wizard1.jpg' // image code



$(document).ready(function() {
  var myPicture = new Image(); // image code
  myPicture.src = Picture; // image code
  picture.appendChild(myPicture); // image code
  var fight;
  var wizard;
  var necro;
  wizard = new Wizard(1, 'kitten', 50);
  necro = new Necromancer(1, 'puppy', 45);
  fight = new Fight(wizard, necro);
  $('#wizardstrength').append(wizard.strength);
  $('#wizardcat').append(wizard.cat);
  $('#wizardhealth').append(wizard.health);
  $('#necrostrength').append(necro.strength);
  $('#necrodog').append(necro.dog);
  $('#necrohealth').append(necro.health);
  $('#play').click(function(){
    fight.strike();
  });
});
