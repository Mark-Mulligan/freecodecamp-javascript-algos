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

//Falsy Bouncer
function bouncer(arr) {
  const resultArr = [];

  arr.forEach(item => {
    if (item) resultArr.push(item);
  })

  return resultArr;
}

//Where do I belong
function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) return i;
  }
  return sortedArr.length;
}

//Mutations
function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase().split('');

  for (let i = 0; i < secondWord.length; i++) {
    if (!firstWord.includes(secondWord[i])) {
      return false;
    }
  }

  return true;
}

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  const resultArr = [];
  let counter = 0;

  while (counter < arr.length) {
    let tempArr = [];

    for (let i = 0; i < size; i++) {
      if (counter < arr.length) {
        tempArr.push(arr[counter]);
        counter++;
      } else {
        break;
      }
    }
    resultArr.push(tempArr);
  } 

  return resultArr;
}

/* ----- Intermediate Algorithm Scripting ----- */

//Sum All Numbers in a Range
function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

//Diff Two Arrays
function diffArray(arr1, arr2) {
  const resultArr = [];

  arr1.forEach(item => {
    if (!arr2.includes(item)) {
      resultArr.push(item);
    }
  })

  arr2.forEach(item => {
    if (!arr1.includes(item)) {
      resultArr.push(item)
    }
  })

  return resultArr;
}

//Seek and Destroy
function destroyer(arr) {
  let targets = [...arguments].slice(1);
  let result = [];

  arr.forEach(value => {
    if (!targets.includes(value)) {
      result.push(value);
    }
  })

  return result;
}

//Wherefore art Thou 
// Need to make more efficient
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  let matching = true;

  collection.forEach(object => {
    keys.forEach(key => {
      if (!object.hasOwnProperty(key) || object[key] !== source[key]) {
        matching = false;
      }
    });

    if (matching) arr.push(object);
    else matching = true;
  })

  // Only change code above this line
  return arr;
}



/* Spinal Tap Case */
function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
  
}

/* Pig Latin */
function translatePigLatin(str) {
  let regex = /^[^aeiou]+/i;
  
  if (str.match(regex)) {
    let consonants = str.match(regex)[0];
    return str.replace(regex, '') + consonants + 'ay';
  } else {
    return str + 'way';
  }
}

/* Search And Replace */
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else if (/^[a-z]/.test(before)) {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

/* DNA pairing */
function pairElement(str) {
  const firstDNAelements = str.split('');
  const DNApairs = [];

  firstDNAelements.forEach(dna => {
    if (dna === 'C') DNApairs.push(['C', 'G']);
    else if (dna === 'G') DNApairs.push(['G', 'C']);
    else if (dna === 'A') DNApairs.push(['A', 'T'])
    else DNApairs.push(['T', 'A']);
  })

  return DNApairs;
}

/* Missing Letters */
function fearNotLetter(str) {
  let letterCharCode = str.charCodeAt(0);
  
  for (let i = 0; i < str.length; i++) {
    if (letterCharCode !== str.charCodeAt(i)) {
      return String.fromCharCode(letterCharCode);
    }
    
    letterCharCode++;
  }
}

console.log(fearNotLetter("abcde"));


