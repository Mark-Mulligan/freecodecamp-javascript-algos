/* ----- Basic Algorithm Scripting ----- */

//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  return celsius * (9/5) + 32;
}

console.log(convertToF(30));

//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
