// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Defines the function buildABear and its arguments.
function buildABear(name, age, fur, clothes, specialPower) {
  // Defines the argument greeting as a string.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Defines the argument demographics as an array.
  var demographics = [name, age];
  // Defines the argument powerSaying a a concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Defines the object builtBear and its component information.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  // This stops the function and specifies the value of builtBear to be returned.
  return builtBear
}

//  These are object instances of bears that will be built.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// This line defines the function and its arguments.
function fizzBuzz(num1, num2, range) {
  // This line starts a loop that starts at 0 and will continue adding 1 to the counter until it reaches the limit determined by the value of range.
  for (var i = 0; i <= range; i++) {
    // These lines states that if the remainder of i divided by num1 is 0 and the remainder of i divided by num2 is 0 then the console should print 'fizzbuzz'.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    // These lines state that if the remainder of i divided by num1 is equal to 0 then the console should print 'fizz'.
    } else if (i % num1 === 0) {
      console.log('fizz');
    // These lines state that if the reaminder of i divided by num2 is equal to 0 then the console should print 'buzz'.
    } else if (i % num2 === 0) {
      console.log('buzz');
    // These lines state that if none of the other condiditons are true, the console should print the value of i.
    } else {
      console.log(i);
    }
  }
}

//  These lines call the function and provide the values for its arguments.
fizzBuzz(3, 5, 100);
// There was a typo here that created a Reference Error. I fixed it.
fizzBuzz(5, 8, 400);
