/**
Basic JavaScript: Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's Case, 
the following Case statement(s) are executed until a break is encountered.
 If you have multiple inputs with the same output, you can represent them in
  a switch statement like this:
 */
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      return "Low";
    break;
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
