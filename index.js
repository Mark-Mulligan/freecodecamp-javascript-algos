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

//Confirm the Ending In String
function confirmEnding(str, target) {
  const ending = str.slice(str.length - target.length, str.length);
  return ending === target;
}

//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let repeatedString = '';
  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

//Truncate a String
function truncateString(str, num) {
  return (num < str.length) ? str.slice(0, num) + '...' : str;
}

//More readable
function truncateString2(str, num) {
  if (num < str.length) {
    return str.slice(0, num) + '...';
  }

  return str;
}

//Finders Keepers
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Boo who, checks to see if input is boolean
function booWho(bool) {
  return (typeof bool === 'boolean');
}

booWho(null);

//Title Case a Sentence
function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  const titleCaseWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  })

  return titleCaseWords.join(' ');
}

titleCase("I'm a little tea pot");

//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let arr1copy = [...arr1];
  let arr2copy = [...arr2];

  arr2copy.splice(n, 0, ...arr1copy);
  return arr2copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


