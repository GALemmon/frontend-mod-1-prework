// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'The Amazing Dad Man';
var specialAbility = 'make egg-in-a-basket with no notice';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello, I'm Dad Man!";
var catchphrase = 'Knock that off!';

// Declare two variables - power AND energy - set to integers

var power = 15;
var energy = 3;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['dishes', ' bedtime', ' clear legos on the carpet'];
var sidekicks = ['Will', 'Hazel', 'Hank'];

// Print the first sidekick to your console

console.log('sidekick #1', sidekicks[0]);

// Print the last archEnemy to the console

console.log('last archenemy', archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies = [...archEnemies, ' the cat box'];

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log('archEnemies + new entry', archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log('sidekicks - first entry', sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel) {
  this.dangerLevel = dangerLevel
  var saveTheDay = 'Here we go again!'
  var badExcuse = 'I think I left the toaster on.'
  if (dangerLevel >= 50) {
    console.log(badExcuse)
  } else if (dangerLevel < 10) {
      console.log('Meh. Hard pass.')
    } else {
      console.log(saveTheDay)
    }
};

assessSituation(70);
assessSituation(50);
assessSituation(40);
assessSituation(5);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

function assessSituation(dangerLevel) {
  this.dangerLevel = dangerLevel
  var saveTheDay = 'Never fear, the Courageous Curly Bracket is here!'
  var badExcuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
  if (dangerLevel >= 50) {
    console.log(badExcuse)
  } else if (dangerLevel < 10) {
      console.log('Meh. Hard pass.')
    } else {
      console.log(saveTheDay)
    }
};

assessSituation(99);
assessSituation(21);
assessSituation(3);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: 'Catzilla',
  smell: 'sulferous',
  weight: 20000,
  citiesDestroyed: ['Tokyo', 'San Francisco', 'New York'],
  luckyNumbers: [14, 42, 7],
  address: {number: '1234', street: 'Main Street', state: 'SD', zip: '00001' }
};

console.log('scaryMonster: ', scaryMonster);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName() {
    console.log(this.name)
  }

  maximizeEnergy() {
    this.energyLevel = 1000
  }

  gainPower(addedPower) {
    this.powerLevel = this.powerLevel + addedPower
  }
};

var hero1 = new SuperHero('Light Guy', 'Gently Floating', '56');
var hero2 = new SuperHero('Snake Girl', 'Cleaning Slow Drains', '24');

console.log('hero1: ', hero1);
console.log('hero2: ', hero2);

hero1.sayName();

hero2.maximizeEnergy();
hero2.gainPower(400);
console.log('hero2 + maximizeEnergy + gainPower: ', hero2);

// Reflection
// What parts were most difficult about this exerise?

// Mostly remembering all the syntax.

// What parts felt most comfortable to you?

// The general concepts all seem to be there.

// What skills do you need to continue to practice before starting Mod 1?

// I think I just need to get more reps in.  Drilling will be helpful.
