/* ----- Basic Algorithm Scripting ----- */

//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  return celsius * (9/5) + 32;
}

//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Factorialize a NumberPassed
function factorialize(num) {
  let sum = 1;

  for (let i = 2; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

//Find the Longest Word in a String
function findLongestWordLength(str) {
  const words = str.split(' ');
  let longestWord = words[0].length;

  words.forEach(word => {
    if (word.length > longestWord) longestWord = word.length;
  })

  return longestWord;
}

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const largestNumbers = [];

  arr.forEach(subArr => {
    largestNumbers.push(Math.max(...subArr));
  })
  
  return largestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


