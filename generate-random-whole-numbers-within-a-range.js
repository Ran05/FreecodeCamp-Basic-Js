/**
Basic JavaScript: Generate 
Random Whole Numbers within a Range
Instead of generating a random 
whole number between zero and a 
given number like we did before,
 we can generate a random whole 
 number that falls within a range
  of two specific numbers.

To do this, we'll define a 
minimum number min and a maximum 
number max.

Here's the formula we'll use. 
Take a moment to read it and 
try to understand what this 

code is doing:
 */

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}


console.log(randomRange(1,2));