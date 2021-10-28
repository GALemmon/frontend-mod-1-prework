/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {

}

var bullDog = new Dog();
var germanShepard = new Dog();

console.log(bullDog);
console.log(germanShepard);

// Prompt 2: Snack

class Snack {

}

var gummyBears = new Snack();
var popCorn = new Snack();

console.log(gummyBears);
console.log(popCorn);

// Prompt 3: Shirt

class Shirt {

}

var tshirt = new Shirt();
var turtleNeck = new Shirt();

console.log(tshirt);
console.log(turtleNeck);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog1 {
  constructor(){
    this.color = 'brown';
    this.size = 'medium';
    this.smart = 'not so much';
  }
}

var bullDog1 = new Dog1;

var germanShepard1 = new Dog1;
  germanShepard1.color = 'brown';
  germanShepard1.size = 'large';
  germanShepard1.smart = 'very';

console.log(bullDog1);
console.log(germanShepard1);

// Prompt 2: Snack

class Snack1 {
  constructor() {
    this.texture = "chewy";
    this.salty = 'no';
    this.sweet = 'yes';
  }
}

var gummyBears1 = new Snack1;

var popCorn1 = new Snack1;
  popCorn1.texture = 'crunchy';
  popCorn1.salty = 'yes';
  popCorn1.sweet = 'no';

var carmelCorn1 = new Snack1;
  carmelCorn1.texture = 'crunchy';
  carmelCorn1.salty = 'yes';
  carmelCorn1.sweet = 'yes';

console.log(gummyBears1);
console.log(popCorn1);
console.log(carmelCorn1);

// Prompt 3: Shirt

class Shirt1 {
  constructor(longSleves, collar, buttons) {
    this.longSleves = 'no';
    this.collar = 'no';
    this.buttons = 'no';
  }
}

var tshirt1 = new Shirt1;

var turtleNeck1 = new Shirt1;
  turtleNeck1.longSleves = 'yes';
  turtleNeck1.collar = 'yes';
  turtleNeck1.buttons = 'no';

var henley1 = new Shirt1('yes', 'no', 'yes');
  henley1.longSleves = 'yes';
  henley1.collar = 'no';
  henley1.buttons = 'yes';

console.log(tshirt1);
console.log(turtleNeck1);
console.log(henley1);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog2 {
  constructor(color, size, smart){
    this.color = color;
    this.size = size;
    this.smart = smart;
  }
}

var bullDog2 = new Dog2('brown', 'medium', 'not so much');
var germanShepard2 = new Dog2('brown', 'large', 'very');

console.log(bullDog2);
console.log(germanShepard2);


// Prompt 2: Snack

class Snack2 {
  constructor(texture, salty, sweet) {
    this.texture = texture;
    this.salty = salty;
    this.sweet = sweet;
  }
}

var gummyBears2 = new Snack2('chewy', 'no', 'yes');
var popCorn2 = new Snack2('crunchy', 'yes', 'no');
var carmelCorn2 = new Snack2('crunchy', 'yes', 'yes');

console.log(gummyBears2);
console.log(popCorn2);
console.log(carmelCorn2);

// Prompt 3: Shirt

class Shirt2 {
  constructor(longSleves, collar, buttons) {
    this.longSleves = longSleves;
    this.collar = collar;
    this.buttons = buttons;
  }
}

var tshirt2 = new Shirt2('no', 'no', 'no');
var turtleNeck2 = new Shirt2('yes', 'yes', 'no');
var henley2 = new Shirt2('yes', 'no', 'yes');

console.log(tshirt2);
console.log(turtleNeck2);
console.log(henley2);
