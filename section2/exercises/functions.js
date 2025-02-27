/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function greeting() {
  console.log('Oh, Hello!');
};

greeting();
greeting();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe() {
  console.log('Hello, ' + firstName + ' ' + lastName + '!');
};

let firstName = 'George';
let lastName = 'Lemmon';

greetMe();

firstName = 'Conan';
lastName = 'the Barbarian';

greetMe();

firstName = 'Abe';
lastName = 'Lincoln';

greetMe();


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function sumNums() {
  console.log(num1 + num2);
};

var num1 = Math.floor((Math.random() * 10) + 1);
var num2 = Math.floor((Math.random() * 10) + 1);

sumNums();

num1 = Math.floor((Math.random() * 10) + 1);
num2 = Math.floor((Math.random() * 10) + 1);

sumNums();

num1 = Math.floor((Math.random() * 10) + 1);
num2 = Math.floor((Math.random() * 10) + 1);

sumNums();

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function whereTo() {
  console.log("Let's go to the corner of " + street1 + " and " + street2 + ".");
};

let street1 = '35th';
let street2 = 'Zuni';

whereTo();


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I chose to use street names in the concatenation exercise.  It made sense to name them street1 and street2.
I wanted to make a sentence that named an intersection, so I named my function whereTo as it answers that
question.

*/
