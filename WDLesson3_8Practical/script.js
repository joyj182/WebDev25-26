
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? 
  function name is wrong supposed to be cylinder(). Braket missing
*/
function cylinder(){

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? 
   "Get element by Id on line 13 and 14 is spelled wrong. The get element by id for height isn't called "height" it's called "hi". */

  let r = parseInt(document.getElementById("r").value);
  let height = parseInt(document.getElementById("hi").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container?
   Delete .value
  
  */
  let op = document.getElementById("output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct?
  the variable is height not h. Multiple r squared to height not divide. Math.PI and Math.pow the m is uppercase
  */
  let v = Math.PI * Math.pow(r,2) * height;

  /* Challenge 8: Are there any errors in displaying the output?
  Backtik missing and semicolon.
  */

op.innerHTML = `Volume of the cylinder is ${v}`;
}

 

  