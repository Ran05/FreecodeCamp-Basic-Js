/**
Basic JavaScript: Delete Properties from a JavaScript Object
We can also delete properties from objects like this:

delete ourDog.bark;
 */

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

// Only change code below this line
